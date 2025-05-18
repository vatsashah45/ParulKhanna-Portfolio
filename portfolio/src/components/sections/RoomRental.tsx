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
            Finding accommodation in Canada is one of the first things any newcomer will want to tick off their to-do list.
            Depending on your circumstances, you may wish to find temporary accommodation first while you search for apartments or houses.
            From your first night to your first lease and beyond, this service is for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="https://forms.gle/your-google-form"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 rounded-full bg-purple-300 px-5 py-2.5 text-black font-semibold hover:bg-purple-400 transition-all shadow-md"
            >
              <span>Check Availability</span>
            </motion.a>

            <motion.a
              href="/photos"
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
