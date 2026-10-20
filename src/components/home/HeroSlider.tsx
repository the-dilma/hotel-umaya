"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { heroSlides } from "@/lib/content";

const INTERVAL_MS = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // Advance to the next photo on a timer; restarts whenever a dot is clicked.
  useEffect(() => {
    const id = setTimeout(() => setIndex((i) => (i + 1) % heroSlides.length), INTERVAL_MS);
    return () => clearTimeout(id);
  }, [index]);

  const slide = heroSlides[index];

  return (
    <section className="relative h-[calc(100svh-5rem)] min-h-[520px] overflow-hidden bg-charcoal">
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          {/* Slow zoom ("Ken Burns") for an elegant, cinematic feel. */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: INTERVAL_MS / 1000 + 1.5, ease: "linear" }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              preload={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/70" />

      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-ivory [text-shadow:0_2px_12px_rgb(0_0_0/0.5)]">
        <p className="motion-safe:animate-fade-up [animation-delay:200ms] text-xs uppercase tracking-[0.4em] text-gold sm:text-sm">
          Welcome to
        </p>
        <h1 className="motion-safe:animate-fade-up [animation-delay:400ms] mt-3 font-script text-7xl sm:text-8xl lg:text-9xl">
          Hotel Umaya
        </h1>
        <p className="motion-safe:animate-fade-up [animation-delay:600ms] mt-4 max-w-xl font-serif text-xl sm:text-2xl">
          Where every celebration becomes a timeless memory
        </p>
        <div className="motion-safe:animate-fade-up [animation-delay:800ms] mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/halls"
            className="bg-crimson px-8 py-3 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:bg-crimson-dark"
          >
            Explore our halls
          </Link>
          <Link
            href="/contact"
            className="border border-ivory px-8 py-3 text-sm uppercase tracking-[0.2em] transition-colors hover:bg-ivory hover:text-charcoal"
          >
            Contact us
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 flex justify-center gap-3">
        {heroSlides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1}`}
            className={`h-1 transition-all duration-500 ${
              i === index ? "w-10 bg-gold" : "w-5 bg-ivory/60 hover:bg-ivory"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
