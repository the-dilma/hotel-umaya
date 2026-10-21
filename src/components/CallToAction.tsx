import { MessageCircle, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { phoneLink, whatsappLink } from "@/lib/site";

// Closing "get in touch" section shared by several pages.
export default function CallToAction({
  title = "Let's celebrate together",
  text = "Visit us or get in touch to check dates, view our halls and plan every detail of your special day.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
      <Reveal>
        <p className="font-script text-5xl text-crimson sm:text-6xl">{title}</p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/80">{text}</p>
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
  );
}
