"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type CarouselImage = { src: string; alt: string };

export function ImageCarousel({ images }: { images: CarouselImage[] }) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const go = (next: number) => setIndex((next + count) % count);

  return (
    <div className="w-64 sm:w-80">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 group">
        {images.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 16rem, 20rem"
            priority={i === 0}
            className={`object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <button
          onClick={() => go(index - 1)}
          aria-label="Previous photo"
          className="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center h-9 w-9 rounded-full bg-white/70 dark:bg-black/50 text-neutral-900 dark:text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-white dark:hover:bg-black transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => go(index + 1)}
          aria-label="Next photo"
          className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center h-9 w-9 rounded-full bg-white/70 dark:bg-black/50 text-neutral-900 dark:text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-white dark:hover:bg-black transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index
                ? "w-6 bg-neutral-900 dark:bg-white"
                : "w-1.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
