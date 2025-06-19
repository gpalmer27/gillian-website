import Image from "next/image";
export default function About() {
  return (
    <div className="flex flex-col sm:flex-row items-center">
      <div className="sm:w-1/2 w-full pt-12 flex justify-center">
        <Image
          src="/sandbox_headshot.JPG"
          alt="Website Photo"
          width={400}
          height={400}
          priority
          className="rounded-lg w-60 h-full sm:w-60 sm:h-full md:w-80 md:h-full lg:w-96 lg:h-full"
        />
      </div>
      <div className="sm:w-1/2 w-full flex flex-col justify-center items-center sm:items-start px-8">
        <div className="text-4xl font-bold mb-4 pt-4">About Me:</div>
        <div className="mb-6 text-xl sm:pr-12">
          I&apos;m a third-year at Northeastern pursuing a bachelor&apos;s
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
