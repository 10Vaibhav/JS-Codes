import { NextRequest, NextResponse } from "next/server";
import prismaClient from "../../../lib/db"

export async function POST(req: NextRequest){
    // req.body?
    const data = await req.json();
    console.log(data);
    await prismaClient.user.create({
        data: {
            username: data.username,
            password: data.password
        }
    })
    return NextResponse.json({
        message: "You Have Been Signed Up"
    })
}

export async function GET(){
    const user = await prismaClient.user.findMany();
    return NextResponse.json({
        user
    })
}
