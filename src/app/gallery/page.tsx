import type { Metadata } from "next";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import PageHeader from "@/components/PageHeader";
import { pageBanners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of weddings, décor, food and our halls at Hotel Umaya.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="Moments to treasure" title="Gallery" image={pageBanners.gallery} />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <GalleryGrid />
      </section>
    </>
  );
}
