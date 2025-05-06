"use client";

import ThemeSwitch from "./ThemeSwitch";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#socials", label: "Socials" },
  { href: "#appointments", label: "Appointments" },
  { href: "#affiliates", label: "Affiliate Links" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40
                       dark:supports-[backdrop-filter]:bg-black/20 border-b border-white/10">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <span className="font-semibold">Parul</span>
        <ul className="hidden gap-6 md:flex">
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="hover:underline underline-offset-4">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeSwitch />
      </nav>
    </header>
  );
}
