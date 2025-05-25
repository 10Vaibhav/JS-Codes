import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { sendEmail } from "@/helpers/mailer";
import { Connect } from "@/dbConfig/dbConfig";

Connect();

interface BodyType {
    email: string;
}

export async function POST(request: NextRequest) {

    const body: BodyType = await request.json();

    const user = await User.findOne({ email: body.email });

    if (!user) {
        return NextResponse.json({
            message: "Invalid Email"
        }, { status: 404 });
    }


    // send verification email
    await sendEmail({ email: user.email, emailType: "RESET", userId: user._id });

    return NextResponse.json({
        message: "Mail is sended!!",
        success: true,
    });

}
