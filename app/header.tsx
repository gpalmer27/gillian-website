"use client";

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export function Header({ darkMode, setDarkMode }) {
  const navLinks = [
    { name: "home", href: "/home" },
    { name: "about", href: "/about" },
    { name: "projects", href: "/projects" },
    { name: "experience", href: "/experience" },
  ];
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-[#ccc9cd] dark:bg-[#6f6e70] dark:text-slate-300 flex items-center px-12 p-8 relative">
      <div className="cursor-pointer ">
        {darkMode ? (
          <BsFillSunFill
            onClick={() => setDarkMode(!darkMode)}
            className="text-3xl"
          />
        ) : (
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="text-3xl"
          />
        )}
      </div>
      <div className="flex-1 hidden md:flex justify-center space-x-20 text-lg">
        {navLinks.map((item) => (
          <Link
            key={navLinks.indexOf(item)}
            href={item.href}
            className={`hover:font-bold ${pathname.startsWith(item.href) ? "font-bold" : ""}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="md:hidden flex-1 flex justify-end">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-full right-0 w-[50%] bg-[#ccc9cd] dark:bg-[#ccc9cd] flex flex-col items-center md:hidden z-50 shadow-lg">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`py-3 w-[50%] text-center border-b border-gray-300 hover:text-white ${pathname.startsWith(item.href.split("?")[0]) ? "text-white" : "text-black"}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
      {/* Spacer for centering */}
      <div className="hidden md:block" style={{ width: "2rem" }} />
    </div>
  );
}
