import { Github, Linkedin, Mail } from "lucide-react";
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="text-center flex flex-col items-center justify-center p-10 py-10 min-h-100vh">
            <h2 className="text-7xl pt-[12%] text-black font-medium animate-slide-in-left">
              Hi, I&apos;m Gillian!
            </h2>
            <h3 className="text-6xl py-2 pt-4 pb-4 animate-slide-in-right">
              CS @ Northeastern University
            </h3>
            <div className="text-5xl flex justify-center gap-16 py-3 animate-slide-in-right">
              <Link href="https://www.linkedin.com/in/gillianpalmer1/" target="_blank" rel="noopener noreferrer">
              <div className="cursor-pointer ">
                <Linkedin size={40}/>
              </div>
              </Link>
              <Link href="https://github.com/gpalmer27" target="_blank" rel="noopener noreferrer">
              <div className="cursor-pointer">
                <Github size={40}/>
              </div>
              </Link>
              <Link href="mailto:palmer.gi@northeastern.edu" target="_blank" rel="noopener noreferrer">
              <div className="cursor-pointer">
                <Mail size={40}/>
              </div>
              </Link>
            </div>
          </div>
  )
}