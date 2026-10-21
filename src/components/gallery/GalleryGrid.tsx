"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery, galleryCategories, type GalleryCategory } from "@/lib/content";
import TabButtons from "../TabButtons";

type Filter = "All" | GalleryCategory;
const filters: Filter[] = ["All", ...galleryCategories];

export default function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  // Index into `photos` of the photo open in the lightbox, or null when closed.
  const [open, setOpen] = useState<number | null>(null);

  const photos = filter === "All" ? gallery : gallery.filter((p) => p.category === filter);

  const show = (step: number) =>
    setOpen((i) => (i === null ? null : (i + step + photos.length) % photos.length));

  // Keyboard controls and scroll lock while the lightbox is open.
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") show(1);
      if (e.key === "ArrowLeft") show(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  });

  const current = open === null ? null : photos[open];

  return (
    <>
      <TabButtons tabs={filters} active={filter} onChange={setFilter} id="gallery-filter" />

      {/* Dense grid: every 4th photo is twice as tall for a varied, editorial layout. */}
      <motion.ul
        layout
        className="grid grid-flow-dense auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[240px] md:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {photos.map((photo, i) => (
            <motion.li
              key={photo.src}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className={i % 4 === 0 ? "row-span-2" : ""}
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group relative block size-full overflow-hidden"
                aria-label={`Open photo: ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 text-left text-sm text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {photo.alt}
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
          >
            <motion.div
              key={current.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative h-[80vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
            </motion.div>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm tracking-wider text-ivory/80">
              {current.alt} · {open! + 1} / {photos.length}
            </p>

            <button
              type="button"
              onClick={() => setOpen(null)}
              className="absolute top-4 right-4 p-2 text-ivory hover:text-gold"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                show(-1);
              }}
              className="absolute left-2 p-2 text-ivory hover:text-gold sm:left-6"
              aria-label="Previous photo"
            >
              <ChevronLeft size={44} strokeWidth={1.2} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                show(1);
              }}
              className="absolute right-2 p-2 text-ivory hover:text-gold sm:right-6"
              aria-label="Next photo"
            >
              <ChevronRight size={44} strokeWidth={1.2} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
