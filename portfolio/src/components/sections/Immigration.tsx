"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Immigration() {
  return (
    <section id="immigrate" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/Headshot.jpeg"
            alt="Immigrate to Canada"
            width={800}
            height={600}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </motion.div>

        <div className="space-y-6">
          <p className="text-sm uppercase text-brand font-semibold tracking-wider">Immigration Services</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Immigrate to Canada
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            Start your journey to a better future in Canada. Whether youre applying for PR, work permits, or
            exploring express entry, I’ll connect you with verified immigration consultants that can help.
          </p>

          <motion.a
            href="https://calendly.com/parultv"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-full bg-purple-300 px-6 py-3 text-black font-semibold hover:bg-purple-400 transition-all shadow-lg"
          >
            Learn More
          </motion.a>
        </div>
      </div>
    </section>
  );
}
