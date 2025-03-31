"use server";

import { Env } from "@/utils";
import { Resend } from "resend";
import { GettingEmail } from "../../emails/gettings";

export async function sendEmail({
  email,
  message,
}: {
  email: string;
  message: string;
}) {
  try {
    const resend = new Resend(Env.resendApiKey);

    if (!email || !message) {
      return { error: "All fields are required" };
    }

    const data = await resend.emails.send({
      from: "mdkawsarislam2002@gmail",
      to: email,
      subject: "hello world",
      react: GettingEmail(),
    });
    if (!data.data) throw new Error("Failed to send email", { cause: data });

    return { success: data.error, data: data };
  } catch (error: any) {
    if ("message" in error && error.message.includes("Missing API key")) {
      return { error: "Missing environment variable: RESEND_API_KEY" };
    }
    return { error: error.message ?? "Failed to send email" };
  }
}
