import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { Connect } from "@/dbConfig/dbConfig";

Connect();

export async function GET(request: NextRequest){

    try{
        const userID = await getDataFromToken(request);
        const user = await User.findOne({_id: userID}).select("-password");
        return NextResponse.json({
            message : "user found",
            data: user
        });

    }catch(error: any){
        return NextResponse.json({
            error: error.message
        }, {status: 400});
    }
}