"use client";

import { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { motion } from "framer-motion";

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
        className="w-full rounded-md bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 px-4 py-3
                   text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/60 focus:outline-none
                   focus:ring-2 focus:ring-purple-400 transition"
      />

      <textarea
        name="message"
        required
        placeholder="Your message"
        rows={6}
        className="w-full rounded-md bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 px-4 py-3
                   text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/60 focus:outline-none
                   focus:ring-2 focus:ring-purple-400 transition"
      />

      <motion.button
        type="submit"
        whileHover={{
          y: -4,
          opacity: 0.9,
        }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="block mx-auto rounded-md bg-purple-300 px-6 py-3 text-black font-semibold hover:bg-purple-400 transition-all"
      >
        Send
      </motion.button>

      {status && <p className="text-sm text-purple-300 mt-2">{status}</p>}
    </form>
  );
}
