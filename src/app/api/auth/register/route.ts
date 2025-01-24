import  {prisma}  from '@/lib/prisma'
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt'

export async function POST(request:Request) {
    try{
        const data = await request.json();

        if(!data.email || !data.name || !data.password ||  !data.gender_id){
            return NextResponse.json(
                {error: "name, gender, email and password are required"},
                { status: 400 }
            )
        }

        const userFound = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        })
    
        if(userFound){
            return NextResponse.json(
                { message: "Email already registered"}, 
                { status: 400})
        }
    
        const hasehdPassword = await bcrypt.hash(data.password, 10)
    
        await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: hasehdPassword,
                gender_id: data.gender_id
            }
        })
    
        const postedUser = {
            id: data.id,
            name: data.name,
            email: data.email,
            gender_id: data.gender_id
        }
    
        return NextResponse.json(
            {
                message: 'User created',
                user: postedUser,
            },
            { status: 201 }
        );
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
    