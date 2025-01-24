import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: { param: string } }
) {
    try {
        const param = decodeURIComponent(params.param);
        // Verificar si el parámetro es un email (contiene @)
        const isEmail = param.includes('@');
        console.log("is email", isEmail);

        const user = await prisma.user.findUnique({
            where: isEmail 
                ? { email: param }
                : { id: parseInt(param) },
            select: {
                id: true,
                name: true,
                email: true,
            }
        });

        if (!user) {
            return NextResponse.json({
                message: "User not found",
                status: 404
            }, { status: 404 });
        }

        return NextResponse.json({
            user,
            status: 200
        }, { status: 200 });

    } catch (error) {
        console.error("Error finding user:", error);
        return NextResponse.json({
            message: "Error finding user",
            error: error,
            status: 500
        }, { status: 500 });
    }
}
