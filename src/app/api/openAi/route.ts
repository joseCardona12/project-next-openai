import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const {prompt} = await req.json();
    if(!prompt)return NextResponse.json({
        message: "Is requited prompt paramter",
        status: 400
    });
    

}