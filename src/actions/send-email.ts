"use server";

import { Resend } from "resend";

export async function sendEmail(formData: FormData) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const interests = formData.get("interests") as string;

    if (!email || !message || !name) {
      return { error: "All fields are required" };
    }

    if (!process.env.RESEND_TO_EMAIL_ADDRESS) {
      return { error: "Missing environment variable: RESEND_TO_EMAIL_ADDRESS" };
    }

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL_ADDRESS,
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Interests: ${interests || "None selected"}
        Message: ${message}
      `,
    });

    return { success: "Email sent successfully" };
  } catch (error: any) {
    if ("message" in error && error.message.includes("Missing API key")) {
      return { error: "Missing environment variable: RESEND_API_KEY" };
    }
    return { error: error.message ?? "Failed to send email" };
  }
}
