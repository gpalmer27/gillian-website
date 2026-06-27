"use client";
import { Header } from "./header";
import "../styles/globals.css";
import { useState } from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <html
      lang="en"
      className={`${darkMode ? "dark" : ""} ${spaceGrotesk.variable}`}
    >
      <head>
        <link rel="icon" type="image/jpg" href="/logo.jpg" />
        <title>Gillian Palmer</title>
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-white text-neutral-900 dark:bg-black dark:text-neutral-200 selection:bg-neutral-900 selection:text-white transition-colors">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-1">{children}</main>
        <footer className="fixed bottom-5 left-5 sm:left-10 z-40 text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-300 pointer-events-none select-none">
          Gillian Palmer © 2026
        </footer>
      </body>
    </html>
  );
}
