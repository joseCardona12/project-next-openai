import { prisma } from '@/lib/prisma'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt'

export async function POST(request: Request) {
    try {
        const data = await request.json();
        console.log('Login request data:', data); // Log de datos recibidos

        const { email, password } = data;

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            )
        }

        const user = await prisma.user.findFirst({
            where: { email: email.toLowerCase() }
        });
        console.log('User found:', user ? 'Yes' : 'No'); // Log si se encontró el usuario

        if(!user){
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            )
        }

        const validPassword = await bcrypt.compare(password, user.password);
        console.log('Password valid:', validPassword); // Log si la contraseña es válida

        if (!validPassword) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            )
        }

        if (!process.env.JWT_KEY) {
            throw new Error('JWT_KEY is not defined in the environment variables');
        }

        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            id: user.id,
            name: user.name,
            email: user.email
        }, process.env.JWT_KEY);

        return NextResponse.json({
            message: 'Login successful',
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            },
            token
        });

    } catch (error) {
        console.error('Login error:', error); // Log detallado del error
        if (error instanceof Error) {
            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            )
        }
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
