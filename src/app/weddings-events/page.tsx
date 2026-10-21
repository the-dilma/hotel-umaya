import type { Metadata } from "next";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { eventTypes, pageBanners, planningSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Weddings & Events",
  description:
    "Weddings, homecomings, engagements, birthdays and corporate events at Hotel Umaya.",
};

export default function WeddingsEventsPage() {
  return (
    <>
      <PageHeader eyebrow="Every occasion" title="Weddings & Events" image={pageBanners.events} />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHeading eyebrow="What we host" title="Celebrations" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((event, i) => (
            <Reveal key={event.title} delay={(i % 3) * 0.1}>
              <article className="group relative aspect-[3/4] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-ivory">
                  <h3 className="text-3xl">{event.title}</h3>
                  <div className="mt-3 h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
                  <p className="mt-4 leading-relaxed text-ivory/85">{event.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Simple & personal" title="How It Works" />
          <ol className="relative grid gap-12 md:grid-cols-4 md:gap-6">
            {/* Gold line connecting the steps on wide screens. */}
            <span className="absolute top-8 right-[12.5%] left-[12.5%] hidden h-px bg-gold/50 md:block" />
            {planningSteps.map((step, i) => (
              <li key={step.title} className="relative text-center">
                <Reveal delay={i * 0.15}>
                  <span className="relative mx-auto flex size-16 items-center justify-center rounded-full border border-gold bg-white font-serif text-2xl text-crimson">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 text-2xl">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-charcoal/75">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
