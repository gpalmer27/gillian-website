"use client";

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "home", href: "/home" },
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
  { name: "experience", href: "/experience" },
  { name: "resume", href: "/resume.pdf", external: true },
];

export function Header({ darkMode, setDarkMode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href ||
    pathname.startsWith(`${href}/`) ||
    (href === "/home" && pathname === "/");

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/70 dark:bg-black/60 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        {/* Monogram */}
        <Link
          href="/home"
          className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white hover:opacity-70 transition-opacity"
          aria-label="Home"
        >
          &lt;GP&gt;
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((item) => {
            const active = !item.external && isActive(item.href);
            const className = `relative text-sm uppercase tracking-[0.15em] transition-colors ${
              active
                ? "text-neutral-900 dark:text-white"
                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            }`;

            if (item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {item.name}
                </a>
              );
            }

            return (
              <Link key={item.href} href={item.href} className={className}>
                {item.name}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-neutral-900 dark:bg-white transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="ml-2 grid place-items-center h-9 w-9 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            {darkMode ? (
              <BsFillSunFill className="text-base" />
            ) : (
              <BsFillMoonStarsFill className="text-base" />
            )}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="grid place-items-center h-9 w-9 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300"
          >
            {darkMode ? (
              <BsFillSunFill className="text-base" />
            ) : (
              <BsFillMoonStarsFill className="text-base" />
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-neutral-900 dark:text-white"
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
          <div className="flex flex-col px-6 py-2">
            {navLinks.map((item) => {
              const active = !item.external && isActive(item.href);
              const className = `py-3 text-sm uppercase tracking-[0.15em] border-b border-neutral-100 dark:border-neutral-900 last:border-0 ${
                active
                  ? "text-neutral-900 dark:text-white"
                  : "text-neutral-500 dark:text-neutral-400"
              }`;

              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className={className}
                  >
                    {item.name}
                  </a>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={className}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
