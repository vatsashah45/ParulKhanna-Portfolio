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
      className="space-y-6 max-w-xl mx-auto"
    >
      <input
        type="email"
        name="senderEmail"
        required
        placeholder="Your email"
        className="w-full rounded-md bg-white/10 backdrop-blur border border-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
      />

      <textarea
        name="message"
        required
        placeholder="Your message"
        rows={6}
        className="w-full rounded-md bg-white/10 backdrop-blur border border-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
      />

      <button
        type="submit"
        className="block mx-auto rounded-md bg-purple-300 px-6 py-3 text-black font-semibold hover:bg-purple-400 transition-all"
      >
        Send
      </button>

      {status && <p className="text-sm text-purple-300 mt-2">{status}</p>}
    </form>
  );
}
