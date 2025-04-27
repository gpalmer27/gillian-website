"use client";
import { Header } from "./header";
import "../styles/globals.css";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <head>
        <link rel=" icon" type="image/jpg" href="/logo.jpg" />
        <title>Gillian Palmer</title>
      </head>
      <body className="min-h-screen flex flex-col">
        <div className="flex flex-col">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <main className="h-full flex-1 bg-[#e4b8ff] dark:bg-[#5b168a] dark:text-slate-300">
          {children}
        </main>
      </body>
    </html>
  );
}
