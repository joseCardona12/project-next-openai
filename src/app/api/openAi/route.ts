import { NextRequest, NextResponse } from "next/server";
import openAiService from "@/app/api/services/openAi.service";

export async function POST(req:NextRequest){
    const {prompt} = await req.json();
    if(!prompt)return NextResponse.json({
        message: "Is requited prompt paramter",
        status: 400
    });
    
    await openAiService.createPrompt(prompt);
}