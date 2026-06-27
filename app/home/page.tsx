"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const socials = [
  {
    href: "https://www.linkedin.com/in/gillianpalmer1/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/gpalmer27", icon: Github, label: "GitHub" },
  {
    href: "mailto:palmer.gi@northeastern.edu",
    icon: Mail,
    label: "Email",
  },
];

const phrases = [
  "software engineer",
  "student",
  "full-stack developer",
  "technical lead",
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let delay = deleting ? 45 : 90;

    if (!deleting && text === current) {
      delay = 1600; // pause at full word
    } else if (deleting && text === "") {
      delay = 400; // pause before next word
    }

    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          current.substring(0, deleting ? text.length - 1 : text.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function HomePage() {
  const typed = useTypewriter(phrases);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center max-w-6xl mx-auto px-6 sm:px-10 py-20">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20 w-full">
        <div className="w-full md:flex-1 text-center md:text-left">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.02] animate-fade-up">
            Hi, I&apos;m Gillian.
          </h1>
          <h2 className="mt-6 text-2xl sm:text-3xl font-light text-neutral-600 dark:text-neutral-400 animate-fade-up">
            I&apos;m a{" "}
            <span className="text-neutral-900 dark:text-white font-normal">
              {typed}
            </span>
            <span className="inline-block w-[2px] h-[1.1em] -mb-[0.15em] ml-1 bg-neutral-900 dark:bg-white animate-pulse" />
          </h2>

          <div className="flex items-center justify-center md:justify-start gap-4 mt-12 animate-fade-up">
            {socials.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid place-items-center h-12 w-12 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-900 dark:hover:text-white hover:-translate-y-0.5 transition-all"
              >
                <Icon size={22} />
              </Link>
            ))}
          </div>
        </div>

        <div className="shrink-0 animate-fade-up">
          <Image
            src="/linkedin.jpg"
            alt="Gillian Palmer"
            width={400}
            height={500}
            priority
            className="rounded-2xl w-56 sm:w-72 lg:w-80 h-auto object-cover border border-neutral-200 dark:border-neutral-800"
          />
        </div>
      </div>
    </section>
  );
}
