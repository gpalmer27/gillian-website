import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header({ darkMode, setDarkMode }) {
  const navLinks = [
    { name: "home", href: "/home" },
    { name: "about", href: "/about" },
    { name: "projects", href: "/projects" },
    { name: "experience", href: "/experience" },
  ];
  const pathname = usePathname();
  return (
    <div className="bg-[#ccc9cd] dark:bg-[#6f6e70] dark:text-slate-300 flex items-center px-12 p-8">
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
      <div className="flex-1 flex justify-center space-x-20 text-lg">
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
      <div style={{ width: "2rem" }} />
    </div>
  );
}
