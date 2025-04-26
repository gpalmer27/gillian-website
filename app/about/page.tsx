import Image from "next/image"
export default function About() {
  return (
    <div className="flex flex-row">
      <div>
        <Image src="" alt="Website Photo" />
      </div>
      <div>
        <div>About Me:</div>
        <div>I'm a second-year at Northeastern pursuing a bachelor's degree in Computer Science with a concentration in Software and a  
                        minor in Mathematics. In my spare time, I love spending time with friends, running, and listening to music.</div>
                        <button type="button" >
                        <a href="Current Resume.pdf" target="blank" >
                            View resume
                        </a>
                    </button>
      </div>

    </div>
    )
}