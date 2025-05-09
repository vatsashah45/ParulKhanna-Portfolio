"use server";

import React from "react";
import { resend } from "@/lib/resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/ContactFormEmail";

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500))
    return { error: "Invalid sender email" };
  if (!validateString(message, 5000))
    return { error: "Invalid message" };

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <noreply@resend.dev>",
      to: "you@example.com",
      subject: "New message from portfolio",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        senderEmail: senderEmail as string,
        message: message as string,
      }),
    });
    return { data };
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
}
