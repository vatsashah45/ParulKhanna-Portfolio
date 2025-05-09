"use server";

import React from "react";
import { resend } from "@/lib/resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/ContactFormEmail";

export async function sendEmail(formData: FormData) {
  const senderValue = formData.get("senderEmail");
  const messageValue = formData.get("message");

  if (!validateString(senderValue, 500) || !validateString(messageValue, 5000)) {
    return { error: "Validation failed" };
  }

  const senderEmail = senderValue as string;
  const message = messageValue as string;

  try {
    await resend.emails.send({
      from: "Portfolio Site <noreply@resend.dev>",
      to: "your@email.com",
      subject: "New portfolio inquiry",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        senderEmail,
        message,
      }),
    });
  } catch (error) {
    return { error: getErrorMessage(error) };
  }

  return { data: "ok" };
}
