"use client";
import { Youtube, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  {
    icon: Youtube,
    label: "YouTube",
    value: "332K",
    color: "bg-[#FF0000]",
    url: "https://www.youtube.com/ParulTV",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "100K",
    color: "bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600",
    url: "https://www.instagram.com/connectparul",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "27K",
    color: "bg-[#0077B5]",
    url: "https://www.linkedin.com/in/connectparulkhanna",
  },
  // {
  //   icon: Twitter,
  //   label: "X",
  //   value: "2K",
  //   color: "bg-black",
  //   url: "https://x.com/parulhacks",
  // },
  // {
  //   icon: Facebook,
  //   label: "Facebook",
  //   value: "6K",
  //   color: "bg-[#1877F2]",
  //   url: "https://www.facebook.com/connectparul",
  // },
];

export default function Socials() {
  return (
    <section id="socials" className="py-16 md:py-20 scroll-mt-24">
      <h2 className="font-display text-4xl font-bold mb-12 text-center">Socials</h2>
      <div className="grid sm:grid-cols-3 gap-8">
      {socials.map(({ icon: Icon, label, value, color, url }) => (
  <motion.a
    key={label}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    className={`block rounded-xl ${color} text-white p-6 text-center shadow-md transition-transform`}
  >
    <Icon className="mx-auto mb-4 w-8 h-8" />
    <p className="text-3xl font-bold">{value}</p>
    <p className="text-sm tracking-wider uppercase opacity-80">{label}</p>
  </motion.a>
))}
      </div>
    </section>
  );
}
