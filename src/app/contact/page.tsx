import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { pageBanners } from "@/lib/content";
import { contact, directionsLink, mapEmbedUrl, phoneLink, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call, WhatsApp or visit Hotel Umaya to plan your wedding or celebration.",
};

const cards = [
  {
    icon: Phone,
    title: "Call us",
    lines: contact.phones,
    href: phoneLink,
    action: "Call now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["Chat with our team"],
    href: whatsappLink,
    action: "Start chat",
    external: true,
  },
  {
    icon: Mail,
    title: "Email",
    lines: [contact.email],
    href: `mailto:${contact.email}`,
    action: "Send email",
  },
  {
    icon: MapPin,
    title: "Visit us",
    lines: [contact.address],
    href: directionsLink,
    action: "Get directions",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="We'd love to meet you" title="Contact Us" image={pageBanners.contact} />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-charcoal/80">
            Bookings are made in person at the hotel. Call or message us to check available dates,
            then visit to see our halls and plan every detail with our team.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, lines, href, action, external }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <a
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="group flex h-full flex-col items-center border border-gold/40 bg-white p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-crimson hover:shadow-xl"
              >
                <span className="flex size-16 items-center justify-center rounded-full border border-gold text-crimson transition-colors duration-500 group-hover:bg-crimson group-hover:text-white">
                  <Icon size={26} strokeWidth={1.5} />
                </span>
                <h2 className="mt-5 text-2xl">{title}</h2>
                {lines.map((line) => (
                  <p key={line} className="mt-2 text-charcoal/75">
                    {line}
                  </p>
                ))}
                <span className="mt-auto pt-6 text-xs uppercase tracking-[0.25em] text-crimson">
                  {action} →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Find us" title="Location & Hours" />
          <div className="grid gap-10 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <iframe
                src={mapEmbedUrl}
                title="Hotel Umaya on Google Maps"
                className="h-[400px] w-full border-0 grayscale-[40%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
            <Reveal delay={0.15} className="flex flex-col justify-center">
              <h3 className="flex items-center gap-3 text-2xl">
                <Clock className="text-crimson" size={22} /> Visiting hours
              </h3>
              <dl className="mt-6 divide-y divide-gold/30">
                {contact.hours.map(({ days, time }) => (
                  <div key={days} className="flex justify-between gap-4 py-4">
                    <dt className="text-charcoal/75">{days}</dt>
                    <dd className="font-semibold">{time}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 bg-crimson px-8 py-3 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:bg-crimson-dark"
              >
                <Navigation size={16} /> Get directions
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
