"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function RoomRental() {
  return (
    <section id="room-rental" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase text-brand font-semibold tracking-wider">Live with Parul</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Room for Rent in <br className="hidden sm:block" /> Montreal
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            Stay with ParulTV and trade the usual student digs for a true launch-pad: a private, queen-sized room in a bright home just ten minutes from Terminus Saint-Jean-sur-Richelieu and half an hour to downtown Montréal. Your rent bundles everything—high-speed Wi-Fi, utilities, laundry, stocked kitchen, and even a Day-1 home-cooked Indian dinner—plus backyard patio and pool access when the weather’s kind. Best of all, you’ll share the space with Parul himself, turning casual coffee chats into on-the-spot mentorship about visas, jobs, and settling into Canada. Arrive, plug in, and start living—not just lodging.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="https://forms.gle/4m7JrjJPQv9jKbKX8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 rounded-full bg-purple-300 px-5 py-2.5 text-black font-semibold hover:bg-purple-400 transition-all shadow-md"
            >
              <span>Inquiry button</span>
            </motion.a>

            <motion.a
              href="https://drive.google.com/drive/folders/18pxXOMQ-kefTowpCZLJR4Oj8E7tLDCeL"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 font-semibold border border-black/10 hover:bg-gray-100 
                        dark:bg-zinc-800 dark:text-white dark:border-white/10 dark:hover:bg-zinc-700 transition-all shadow-md"
            >
              <span>Check Photos</span>
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/House.png"
            alt="Room for rent"
            width={800}
            height={600}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
