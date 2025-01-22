import { NextResponse } from "next/server";
import  {prisma}  from '@/lib/prisma'
import jwt,{ JwtPayload } from 'jsonwebtoken'

export async function POST(request: Request)  {
    try {
        const body = await request.json();
        const authorization = request.headers.get('Authorization');
    
        if(!authorization){
            return NextResponse.json(
                {error: 'Not authorizesd'},
                {status: 401}
            )
        }
        
        const token = authorization.split(' ')[1];
    
        if (!process.env.JWT_KEY) {
            throw new Error('JWT_KEY is not defined in the environment variables');
        }
    
        try{
            jwt.verify(token, process.env.JWT_KEY) as JwtPayload;
    
            if(!body.description){
                return NextResponse.json(
                    {error: "Description and prompt is are required"},
                    { status: 400 }
                )
            }
    
    
            const prompt = await prisma.answer.create({
                data: {
                    description: body.description,
                    prompt_id: body.prompt_id
                }
            })
    
            return NextResponse.json(
                {
                    message: 'Answer successfully saved',
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