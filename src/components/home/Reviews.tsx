"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Quote } from "lucide-react";
import { reviews } from "@/lib/content";

export default function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setIndex((i) => (i + 1) % reviews.length), 7000);
    return () => clearTimeout(id);
  }, [index]);

  const review = reviews[index];

  return (
    <div className="mx-auto max-w-3xl text-center">
      <Quote className="mx-auto mb-6 text-gold" size={40} />
      <div className="min-h-48 sm:min-h-40">
        <AnimatePresence mode="wait">
          <motion.figure
            key={review.name}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="font-serif text-2xl leading-relaxed text-ivory italic sm:text-3xl">
              “{review.text}”
            </blockquote>
            <figcaption className="mt-6 text-sm uppercase tracking-[0.25em] text-gold">
              {review.name}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="mt-8 flex justify-center gap-3">
        {reviews.map((r, i) => (
          <button
            key={r.name}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show review ${i + 1}`}
            className={`size-2.5 rounded-full transition-colors ${
              i === index ? "bg-crimson" : "bg-ivory/30 hover:bg-ivory/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
