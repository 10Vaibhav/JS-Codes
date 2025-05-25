import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";

// Here we use mailtrap for sending a mail
export const sendEmail = async ({ email, emailType, userId }: any) => {

    try {
        // Create a hashed Token
        const hashedToken = await bcrypt.hash(userId.toString(), 10);

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, { verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000 });
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, { forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000 });
        }

        // Looking to send emails in production? Check out our Email API/SMTP product!
        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.MAILUSER,
                pass: process.env.MAILPASS
            }
        });

        const mailOptions = {
            from: "vaibhavmahajan43810@gmail.com",
            to: email,
            subject : emailType === "VERIFY"? "Verify your email": "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/${emailType === "VERIFY"? "verifyemail": "resetPass"}?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "Verify your email": "Reset your password"}</p> <p>URL : ${process.env.DOMAIN}/verifyemail/?token=${hashedToken}`
        }

        const mailResponse = await transport.sendMail(mailOptions);

        return mailResponse;

    } catch (error: any) {
        throw new Error(error.message);
    }
}
