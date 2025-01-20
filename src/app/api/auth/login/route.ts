import  {prisma}  from '@/lib/prisma'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt'

export async function POST (request: Request){

    try{
        const data = await request.json();

        const {email, password } = data;
    
        if(!email || !password){
            return NextResponse.json(
                {error: "Email and password are required"},
                { status: 400 }
            )
        }
    
        const user = await prisma.user.findFirst({
            where: {email: email.toLowerCase()}
        })
    
        if(!user){
            return NextResponse.json(
                {error: "Invalid credentials"},
                { status: 401}
            )
        }
    
        const validPassword = await bcrypt.compare(password, user.password)
    
        if(!validPassword){
            return NextResponse.json(
                {error: "Invalid credentials"},
                { status: 401}
            )
        }
    
        if (!process.env.JWT_KEY) {
            throw new Error('JWT_KEY is not defined in the environment variables');
        }
    
        const token = jwt.sign({
            exp: Math.floor(Date.now() /1000) + 60 * 60 ,
            name: user.name,
            email: email
        }, process.env.JWT_KEY);
    
    
        const authUser = {
            id: user.id,
            name: user.name,
            email: email,
            jwt: token
        }
    
        return NextResponse.json(
            {
                message: 'Successful login',
                user: authUser,
            },
            { status: 200 }
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
