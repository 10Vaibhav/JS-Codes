import { Connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

Connect();

export async function POST(request:NextRequest) {
    try{
        const reqBody = await request.json();
        const {email, password} = reqBody;
        // console.log(reqBody);

        // check if user exists
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({
                error: "User does not exist"
            }, {status: 400})
        }

        // check if password is correct
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            return NextResponse.json({error: "Invalid Password"}, {status: 400})
        }

        // create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        // create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!,{expiresIn: "1d"});

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        });

        response.cookies.set("token", token, {httpOnly: true});

        return response;

    }catch(err: any){
        return NextResponse.json({
            err: err.message
        },{status: 500})
    }
}

