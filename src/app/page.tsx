import Image from "next/image";
import Link from "next/link";
import { Car, Heart, MessageCircle, Phone, Sparkles, Users, Utensils } from "lucide-react";
import HeroSlider from "@/components/home/HeroSlider";
import Reviews from "@/components/home/Reviews";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { about, features, galleryPreview, halls } from "@/lib/content";
import { phoneLink, whatsappLink } from "@/lib/site";

const featureIcons = { utensils: Utensils, sparkles: Sparkles, car: Car, heart: Heart };

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* About */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="absolute -top-4 -left-4 size-full border border-gold" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={about.image}
                alt="Wedding celebration at Hotel Umaya"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="font-script text-4xl text-crimson sm:text-5xl">Our story</p>
          <h2 className="mt-1 text-3xl uppercase tracking-[0.2em] sm:text-4xl">
            A venue made for love
          </h2>
          <div className="mt-6 h-px w-16 bg-gold" />
          {about.paragraphs.map((p) => (
            <p key={p} className="mt-6 text-lg leading-relaxed text-charcoal/80">
              {p}
            </p>
          ))}
          <Link
            href="/weddings-events"
            className="mt-10 inline-block border border-crimson px-8 py-3 text-sm uppercase tracking-[0.2em] text-crimson transition-colors hover:bg-crimson hover:text-white"
          >
            Discover more
          </Link>
        </Reveal>
      </section>

      {/* Halls */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Celebrate in style" title="Our Halls" />
          <div className="grid gap-10 md:grid-cols-2">
            {halls.map((hall, i) => (
              <Reveal key={hall.name} delay={i * 0.15}>
                <article className="group">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={hall.image}
                      alt={hall.name}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute bottom-4 left-4 flex items-center gap-2 bg-charcoal/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-ivory">
                      <Users size={14} className="text-gold" />
                      {hall.capacity}
                    </span>
                  </div>
                  <h3 className="mt-6 text-3xl">{hall.name}</h3>
                  <p className="mt-3 leading-relaxed text-charcoal/75">{hall.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHeading eyebrow="Every detail" title="Why Choose Us" />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon, title, text }, i) => {
            const Icon = featureIcons[icon];
            return (
              <Reveal key={title} delay={i * 0.1} className="text-center">
                <div className="mx-auto flex size-20 items-center justify-center rounded-full border border-gold text-crimson">
                  <Icon size={32} strokeWidth={1.4} />
                </div>
                <h3 className="mt-6 text-2xl">{title}</h3>
                <p className="mt-3 leading-relaxed text-charcoal/75">{text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Moments" title="Gallery" />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {galleryPreview.map((photo, i) => (
              <Reveal key={photo.src} delay={(i % 3) * 0.1}>
                <div className="group relative aspect-square overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-crimson/0 transition-colors duration-500 group-hover:bg-crimson/20" />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-block border border-crimson px-8 py-3 text-sm uppercase tracking-[0.2em] text-crimson transition-colors hover:bg-crimson hover:text-white"
            >
              View full gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-charcoal px-4 py-24 sm:px-6">
        <SectionHeading eyebrow="Kind words" title="Our Couples" light />
        <Reviews />
      </section>

      {/* Call to action */}
      <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
        <Reveal>
          <p className="font-script text-5xl text-crimson sm:text-6xl">Let&apos;s celebrate together</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/80">
            Visit us or get in touch to check dates, view our halls and plan every detail of your
            special day.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={phoneLink}
              className="flex items-center gap-2 bg-crimson px-8 py-3 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:bg-crimson-dark"
            >
              <Phone size={16} /> Call us
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-charcoal px-8 py-3 text-sm uppercase tracking-[0.2em] transition-colors hover:bg-charcoal hover:text-ivory"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
