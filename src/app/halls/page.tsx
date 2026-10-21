import type { Metadata } from "next";
import Image from "next/image";
import { Check, Users } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { hallAmenities, halls, pageBanners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Halls",
  description: "Explore the reception halls at Hotel Umaya — capacities, features and amenities.",
};

export default function HallsPage() {
  return (
    <>
      <PageHeader eyebrow="Spaces to celebrate" title="Our Halls" image={pageBanners.halls} />

      {halls.map((hall, i) => {
        // Alternate photo left / right for an editorial rhythm.
        const reversed = i % 2 === 1;
        return (
          <section key={hall.name} className={i % 2 === 0 ? "bg-ivory" : "bg-white"}>
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-20">
              <Reveal className={reversed ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={hall.image}
                    alt={hall.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-gold">
                  <Users size={16} /> {hall.capacity}
                </p>
                <h2 className="mt-3 text-4xl sm:text-5xl">{hall.name}</h2>
                <div className="mt-6 h-px w-16 bg-gold" />
                <p className="mt-6 text-lg leading-relaxed text-charcoal/80">{hall.description}</p>
                <ul className="mt-8 space-y-3">
                  {hall.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={20} className="mt-0.5 shrink-0 text-crimson" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        );
      })}

      <section className="bg-charcoal px-4 py-24 sm:px-6">
        <SectionHeading eyebrow="Included" title="In Every Hall" light />
        <ul className="mx-auto grid max-w-5xl gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {hallAmenities.map((item, i) => (
            <li key={item} className="border-b border-ivory/10 pb-6 text-ivory/90">
              <Reveal delay={(i % 3) * 0.1} className="flex items-center gap-4">
                <span className="size-2 rotate-45 bg-gold" />
                {item}
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <CallToAction
        title="Come see for yourself"
        text="The best way to choose your hall is to walk through it. Call us to arrange a visit at a time that suits you."
      />
    </>
  );
}
