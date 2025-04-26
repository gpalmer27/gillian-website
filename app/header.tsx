import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from 'next/link'

export function Header({darkMode, setDarkMode}) {

  return (
    <div className="bg-[#ccc9cd] dark:bg-[#ccc9cd] flex dark:text-white">
            <div className="pl-12 pt-8">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
            </div>
            <div className="space-x-12 flex align-center">
                <Link href="/home" >home</Link>
                <Link href="/about" >about</Link>
                <Link href="/projects" >projects</Link>
                <Link href="/experience" >experience</Link>
            </div>

          </div>
  )
}