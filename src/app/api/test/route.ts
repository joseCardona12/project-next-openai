import { NextResponse } from 'next/server';
import  {prisma}  from '@/lib/prisma'

export async function POST(request: Request) {
    try{
        const {title} = await request.json();
        const newNote = await prisma.test.create({
            data: {
                title,

            }
        });
    
        return NextResponse.json(newNote)
    }catch(error){
        if(error instanceof Error){
            return NextResponse.json({
                message: error.message
            }, {
                status: 500
            })
        }
        
    }
    
}