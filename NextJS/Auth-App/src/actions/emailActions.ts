"use server";

import { sendEmail } from "@/helpers/mailer";

export async function sendVerificationEmail(email: string, userId: string) {
  try {
    await sendEmail({
      email: email,
      emailType: "VERIFY",
      userId: userId
    });
    alert("Mail sended!!");
    return { success: true, message: "Verification email sent successfully" };
  } catch (error: any) {
    console.log(error.message);
    return { success: false, message: error.message };
  }
}