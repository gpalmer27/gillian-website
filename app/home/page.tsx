import { Github, Linkedin, Mail } from "lucide-react";
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="text-center p-10 py-10 min-h-screen">
            <h2 className="text-5xl py-2 text-black font-medium dark:text-white md:text-6xl">
              Hi, I'm Gillian!
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              CS @ Northeastern University
            </h3>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400 ">
              <Link href="https://www.linkedin.com/in/gillianpalmer1/" target="_blank" rel="noopener noreferrer">
              <div className="cursor-pointer">
                <Linkedin />
              </div>
              </Link>
              <Link href="https://github.com/gpalmer27" target="_blank" rel="noopener noreferrer">
              <div className="cursor-pointer">
                <Github />
              </div>
              </Link>
              <Link href="mailto:palmer.gi@northeastern.edu" target="_blank" rel="noopener noreferrer">
              <div className="cursor-pointer">
                <Mail />
              </div>
              </Link>
            </div>
          </div>
  )
}