'use client';
import { useState } from 'react';
import { sendEmail } from '@/actions/sendEmail';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const sendEmailAction = sendEmail as unknown as (f: FormData) => Promise<void>;
  const [status, setStatus] = useState<string | null>(null);

  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      action={async (formData) => {
        await sendEmailAction(formData);
        setStatus("Thanks! I'll get back to you ASAP.");
      }}
      className="space-y-4 max-w-xl mx-auto"
    >
      <input
        type="email"
        name="senderEmail"
        required
        placeholder="Your email"
        className="w-full rounded border px-4 py-2 text-black dark:text-white dark:bg-zinc-800 focus:ring-2 focus:ring-brand outline-none"
      />
      <textarea
        name="message"
        required
        placeholder="Your message"
        className="w-full rounded border px-4 py-2 text-black dark:text-white dark:bg-zinc-800 focus:ring-2 focus:ring-brand outline-none"
        rows={5}
      />
      <button
        type="submit"
        className="rounded bg-brand px-6 py-3 text-white hover:bg-brand/90 transition-all"
      >
        Send
      </button>
      {status && <p className="text-sm text-green-500 mt-2">{status}</p>}
    </motion.form>
  );
}
