// Enhanced Socials Section UI (src/components/sections/Socials.tsx)
"use client";
import { Youtube, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Youtube, label: "YouTube", value: "850K", color: "bg-red-500" },
  { icon: Instagram, label: "Instagram", value: "920K", color: "bg-pink-500" },
  { icon: Twitter, label: "X", value: "110K", color: "bg-blue-500" },
];

export default function Socials() {
  return (
    <section id="socials" className="py-32">
      <h2 className="font-display text-4xl font-bold mb-12 text-center">Socials</h2>
      <div className="grid sm:grid-cols-3 gap-8">
        {socials.map(({ icon: Icon, label, value, color }) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.05 }}
            className={`rounded-xl ${color} text-white p-6 text-center shadow-md transition-transform`}
          >
            <Icon className="mx-auto mb-4 w-8 h-8" />
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-sm tracking-wider uppercase opacity-80">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
