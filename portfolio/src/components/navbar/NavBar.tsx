"use client";
import ThemeSwitch from "./ThemeSwitch";
const links = [
  { href: "#about", label: "About" },
  { href: "#socials", label: "Socials" },
  { href: "#appointments", label: "Appointments" },
  { href: "#affiliates", label: "Affiliates" },
  { href: "#contact", label: "Contact" },
];
export default function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-black/60 border-b border-white/20 dark:border-white/10">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <span className="font-display text-lg font-semibold text-brand dark:text-brand-dark">Influencer</span>
        <ul className="hidden gap-6 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="hover:text-brand dark:hover:text-brand-dark transition-colors">
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