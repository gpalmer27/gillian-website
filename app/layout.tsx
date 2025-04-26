
"use client"
import { Header } from "./header"
import '../styles/globals.css';
import { useState } from "react"; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <head />
      <body className="min-h-screen flex flex-col">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="h-full flex-1 bg-[#e4b8ff] dark:bg-[#e4b8ff] ">{children}</main>
      </body>
    </html>
  );
}