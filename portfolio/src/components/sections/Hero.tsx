"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-gray-800 dark:text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent dark:from-black/60 dark:to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 md:py-28 grid md:grid-cols-2 gap-10 items-center text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-5xl md:text-6xl font-extrabold leading-tight">
            Hey, I am <span className="text-purple-300">Parul</span>
          </h1>
          <p className="font-sans mt-4 text-lg max-w-prose mx-auto md:mx-0">
            Cybersecurity enthusiast and influencer with <strong>400K+</strong> followers. I help students succeed in Canada.
          </p>
          <a
            href="https://calendly.com/parultv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 rounded bg-purple-300 px-6 py-3 font-semibold text-black hover:bg-purple-400 transition-transform hover:scale-105"
          >
            Schedule a call with me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="justify-self-center"
        >
          <Image
            src="/Headshot.jpeg"
            alt="Headshot"
            width={300}
            height={300}
            className="rounded-full shadow-xl w-60 h-60 object-cover border-4 border-white"
          />
        </motion.div>
      </div>
    </section>
  );
}
