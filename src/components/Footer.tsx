import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, navLinks } from "@/lib/site";
import CurrentYear from "./CurrentYear";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-script text-5xl text-ivory">Hotel Umaya</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            An elegant setting for weddings, receptions and celebrations to
            remember.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl tracking-wide text-gold">Explore</h2>
          <ul className="space-y-2 text-sm">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="transition-colors hover:text-ivory">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xl tracking-wide text-gold">Get in touch</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="shrink-0 text-crimson" />
              {contact.address}
            </li>
            {contact.phones.map((phone) => (
              <li key={phone} className="flex gap-3">
                <Phone size={18} className="shrink-0 text-crimson" />
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-ivory">
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-crimson" />
              <a href={`mailto:${contact.email}`} className="hover:text-ivory">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-6 text-center text-xs tracking-wider">
        © <CurrentYear /> Hotel Umaya. All rights reserved.
      </div>
    </footer>
  );
}
