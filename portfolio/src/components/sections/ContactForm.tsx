"use client";
import { sendEmail } from "@/actions/sendEmail";

export default function ContactForm() {
  const sendEmailAction = sendEmail as unknown as (
    formData: FormData
  ) => Promise<void>;

  return (
    <form action={sendEmailAction} className="space-y-4">
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
      <button
        type="submit"
        className="rounded bg-indigo-600 px-4 py-2 text-white"
      >
        Send
      </button>
    </form>
  );
}
