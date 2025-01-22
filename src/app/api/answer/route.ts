import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma'
import jwt, { JwtPayload } from 'jsonwebtoken'

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const authorization = request.headers.get('Authorization');

        if (!authorization) {
            return NextResponse.json(
                { error: 'Authorization header is required' },
                { status: 401 }
            )
        }

        const token = authorization.split(' ')[1];

        if (!process.env.JWT_KEY) {
            throw new Error('JWT_KEY is not defined in the environment variables');
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_KEY) as JwtPayload;

            if (!body.description || !body.prompt_id) {
                return NextResponse.json(
                    { error: "Description and prompt_id are required" },
                    { status: 400 }
                )
            }

            // Verificar que el prompt existe
            const existingPrompt = await prisma.prompt.findUnique({
                where: {
                    id: body.prompt_id
                }
            });

            if (!existingPrompt) {
                return NextResponse.json(
                    { error: "Prompt not found" },
                    { status: 404 }
                )
            }

            const answer = await prisma.answer.create({
                data: {
                    description: body.description,
                    prompt_id: body.prompt_id
                },
                include: {
                    prompts: true
                }
            })

            return NextResponse.json(
                {
                    message: 'Answer successfully saved',
                    data: answer,
                },
                { status: 201 }
            );

        } catch (error) {
            if (error instanceof jwt.JsonWebTokenError) {
                return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
            }
            throw error;
        }
    }
    catch (error) {
        console.error('Error in answer route:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}