import { NextResponse } from "next/server";
import  {prisma}  from '@/lib/prisma'
import jwt,{ JwtPayload } from 'jsonwebtoken'

export async function POST(request: Request) {
    
    try{
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
            const decoded = jwt.verify(token,process.env.JWT_KEY) as JwtPayload;
    
            if(!body.age_range_id || !body.day_week_id || !body.current_level_id || !body.target_id){
                return NextResponse.json(
                    {error: "Age range, days per week, currente level and targer are required"},
                    { status: 400 }
                )
            }
    
            const context = await prisma.context.create({
                data: {
                    age_range_id: body.age_range_id,
                    day_week_id: body.day_week_id,
                    user_id: decoded.id,
                    current_level_id: body.current_level_id,
                    target_id: body.target_id
                }
            })
    
            return NextResponse.json(
                {
                    message: 'Context successfully created',
                    context: context,
                },
                { status: 201 }
            );
    
        } catch(error){
            return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
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