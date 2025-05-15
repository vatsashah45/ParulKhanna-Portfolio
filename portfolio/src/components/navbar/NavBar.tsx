"use client";

import { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

const links = [
  { href: "#about", label: "About" },
  { href: "#socials", label: "Socials" },
  { href: "#appointments", label: "Appointments" },
  { href: "#affiliates", label: "Affiliates" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (!mounted) return null;

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto border backdrop-blur-xl shadow-xl rounded-full px-4 py-2 w-full max-w-3xl mx-4 flex items-center justify-between transition-colors duration-300 ${scrolled
            ? "bg-white/60 dark:bg-zinc-900/60 border-white/20 dark:border-white/5"
            : "bg-white/80 dark:bg-zinc-900/80 border-white/30 dark:border-white/10"
          }`}
      >
        <ul className="flex flex-1 justify-between items-center gap-2">
          {links.map(({ href, label }) => (
            <li key={href} className="flex-1 text-center">
              <a
                href={href}
                className="block px-4 py-2 rounded-full text-base font-semibold font-display transition-all transform
             hover:scale-105 hover:text-brand dark:hover:text-brand-dark"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-4 shrink-0">
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
}
