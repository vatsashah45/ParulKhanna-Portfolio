"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeSwitch from "./ThemeSwitch";

const links = [
  { href: "#about", label: "About" },
  { href: "#socials", label: "Socials" },
  { href: "#appointments", label: "Appointments" },
  // { href: "#affiliates", label: "Affiliates" },
  { href: "#room-rental", label: "Accomodation" },
  // { href: "#immigrate", label: "Immigrate" },
  // { href: "#study", label: "Study" },
  { href: "#sponsorship", label: "Sponsorship" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-full bg-white/80 dark:bg-zinc-900/80 border border-white/30 dark:border-white/10 shadow-md backdrop-blur"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className="fixed top-4 right-4 z-50 md:hidden">
        <ThemeSwitch />
      </div>

      <header className="hidden md:flex fixed top-4 inset-x-0 z-50 justify-center pointer-events-none">
        <nav
          className={`pointer-events-auto border backdrop-blur-xl shadow-xl rounded-full px-4 py-2 w-full max-w-4xl mx-4 flex items-center justify-between transition-colors duration-300 ${
            scrolled
              ? "bg-white/60 dark:bg-zinc-900/60 border-white/20 dark:border-white/5"
              : "bg-white/80 dark:bg-zinc-900/80 border-white/30 dark:border-white/10"
          }`}
        >
          <ul className="flex flex-1 justify-between items-center gap-2">
            {links.map(({ href, label }) => (
              <li key={href} className="flex-1 text-center">
                <a
                  href={href}
                  className="block px-4 py-2 rounded-full text-base font-semibold font-display transition-all transform hover:scale-105 hover:text-brand dark:hover:text-brand-dark"
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

      {menuOpen && (
        <div className="fixed top-[4.5rem] left-4 right-4 z-40 rounded-xl bg-white dark:bg-zinc-900 shadow-xl md:hidden">
          <ul className="flex flex-col py-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full px-6 py-3 text-center font-semibold font-display hover:bg-gray-100 dark:hover:bg-zinc-800"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}