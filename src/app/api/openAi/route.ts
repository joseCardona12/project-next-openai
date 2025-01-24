import { NextRequest, NextResponse } from "next/server";
import openAiService from "@/app/api/services/openAi.service";

export async function POST(req:NextRequest){
    const {prompt} = await req.json();
    if(!prompt)return NextResponse.json({
        message: "Is requited prompt paramter",
        status: 400
    });
    
    const data: {message:string,reply:string} = await openAiService.createPrompt(prompt);
    if(data.message === "openAi"){
        return NextResponse.json({
            message: "Error. Is required openAi api key",
            status: 400
        });
    };
    if(data.message === "chats"){
        return NextResponse.json({
            message: "Error to get chats",
            status: 400
        });
    };
    return NextResponse.json({
        message: "Successfully",
        reply: data.reply
    });
}