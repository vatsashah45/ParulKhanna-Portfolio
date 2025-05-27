"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Study() {
  return (
    <section id="study" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase text-brand font-semibold tracking-wider">Study in Canada</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Explore Education Options in Canada
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            Thinking of studying in Canada? Book a one-on-one consultation where I walk you through choosing the right school,
            visa process, and planning your arrival as a student.
          </p>

          <motion.a
            href="https://calendly.com/parultv"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-full bg-purple-300 px-6 py-3 text-black font-semibold hover:bg-purple-400 transition-all shadow-lg"
          >
            Schedule a Call
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/Headshot.jpeg"
            alt="Study in Canada"
            width={800}
            height={600}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
