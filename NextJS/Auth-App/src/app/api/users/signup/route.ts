import { Connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

Connect();

export async function POST(request: NextRequest){
    try{
        const reqBody = await request.json();
        const {username, email, password} =reqBody;

        // console.log(reqBody);

        // check if user already exist
        const user = await User.findOne({email});

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400});
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await new User({
            username,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();
        console.log(savedUser);

        // send verification email
        await sendEmail({email: savedUser.email,emailType: "VERIFY",userId: savedUser._id })

        return NextResponse.json({
            message: "User Created Successfully",
            success: true,
            savedUser
        });

    }catch(error: any){
        return NextResponse.json({
            error: error.message
        }, {status: 500})
    }
}

