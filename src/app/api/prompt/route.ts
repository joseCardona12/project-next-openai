import { NextResponse } from "next/server";
import  {prisma}  from '@/lib/prisma'
import jwt,{ JwtPayload } from 'jsonwebtoken'

export async function POST(request: Request)  {
    try {
        const body = await request.json();
        const authorization = request.headers.get('Authorization');
    
        if(!authorization){
            return NextResponse.json(
                {error: 'Not authorized'},
                {status: 401}
            )
        }
        
        const token = authorization.split(' ')[1];
    
        if (!process.env.JWT_KEY) {
            throw new Error('JWT_KEY is not defined in the environment variables');
        }
    
        try{
            const decoded = jwt.verify(token,process.env.JWT_KEY) as JwtPayload;
    
            if(!body.description){
                return NextResponse.json(
                    {error: "Description is required"},
                    { status: 400 }
                )
            }
    
    
            const prompt = await prisma.prompt.create({
                data: {
                    description: body.description,
                    user_id: decoded.id
                }
            })
    
            return NextResponse.json(
                {
                    message: 'Prompt successfully created',
                    prompt: prompt,
                },
                { status: 201 }
            );
    
        } catch(error){
            if(error instanceof Error){
                return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
            }
        }
    }
    catch(error){
        if(error instanceof Error){
            return NextResponse.json(
                {message: error.message},
                {status: 500}
            )
        }
    }
}