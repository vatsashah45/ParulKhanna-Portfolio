"use client";
import { Youtube, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
export default function Socials() {
  // In production you'd fetch metrics via Server Component with revalidate.
  const stats = [
    { icon: Youtube, label: "YouTube", value: "850K" },
    { icon: Instagram, label: "Instagram", value: "920K" },
    { icon: Twitter, label: "X", value: "110K" },
  ];
  return (
    <section id="socials" className="py-24">
      <h2 className="font-display text-3xl font-bold mb-10">Social Reach</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {stats.map(({ icon: Icon, label, value }) => (
          <motion.div key={label} whileHover={{ y: -4 }} className="rounded-xl border border-white/20 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 text-center backdrop-blur">
            <Icon className="mx-auto mb-3" />
            <p className="text-2xl font-semibold text-brand dark:text-brand-dark">{value}</p>
            <p className="text-sm uppercase tracking-wide">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}