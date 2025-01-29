import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        
        const url = new URL(request.url);
        const param = url.pathname.split('/').pop();  // Extract the dynamic parameter from the URL

        if (!param) {
            return NextResponse.json({
                message: "User parameter is missing",
                status: 400
            }, { status: 400 });
        }

        const decodedParam = decodeURIComponent(param);  // Decode param
        // Check if the parameter is an email (contains @ symbol)
        const isEmail = decodedParam.includes('@');
        console.log("is email", isEmail);

        const user = await prisma.user.findUnique({
            where: isEmail 
                ? { email: decodedParam }
                : { id: parseInt(decodedParam) },
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
