import Image from "next/image";
export default function About() {
  return (
    <div className="flex items-center">
      <div className="w-1/2 pt-12 flex justify-center">
        <Image
          src="/sandbox_headshot.JPG"
          alt="Website Photo"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-start px-8">
        <div className="text-4xl font-bold mb-4 ">About Me:</div>
        <div className="mb-6 text-xl pr-12">
          I&apos;m a second-year at Northeastern pursuing a bachelor&apos;s
          degree in Computer Science with a concentration in Software and a
          minor in Mathematics. In my spare time, I love spending time with
          friends, running, and listening to music.
        </div>
        <button
          type="button"
          className="bg-[#ccc9cd] dark:bg-[#6f6e70] dark:hover:bg-[#868687] px-4 py-2 rounded-xl shadow hover:bg-[#bdbcbd] border border-black"
        >
          <a
            href="Current Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View resume
          </a>
        </button>
      </div>
    </div>
  );
}
