"use client";
import { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
export default function ContactForm() {
  const sendEmailAction = sendEmail as unknown as (f: FormData) => Promise<void>;
  const [status, setStatus] = useState<string | null>(null);
  return (
    <form
      action={async (formData) => {
        await sendEmailAction(formData);
        setStatus("Thanks! I'll get back to you ASAP.");
      }}
      className="space-y-4 max-w-xl"
    >
      <input
        type="email"
        name="senderEmail"
        required
        placeholder="Your email"
        className="w-full rounded border p-2 text-black"
      />
      <textarea
        name="message"
        required
        placeholder="Your message"
        className="w-full rounded border p-2 text-black"
        rows={5}
      />
      <button type="submit" className="rounded bg-brand px-6 py-3 text-white hover:bg-brand/90">
        Send
      </button>
      {status && <p className="text-sm text-brand mt-2">{status}</p>}
    </form>
  );
}