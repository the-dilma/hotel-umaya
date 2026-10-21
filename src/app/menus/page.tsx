import type { Metadata } from "next";
import { Check } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import MenuTabs from "@/components/menus/MenuTabs";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { packages, pageBanners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Menus & Packages",
  description: "Wedding and event packages and sample buffet menus at Hotel Umaya.",
};

export default function MenusPage() {
  return (
    <>
      <PageHeader eyebrow="Taste & celebrate" title="Menus & Packages" image={pageBanners.menus} />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHeading eyebrow="Choose yours" title="Packages" />
        <div className="grid items-center gap-8 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.12}>
              <article
                className={`relative flex flex-col border p-10 text-center ${
                  pkg.featured
                    ? "border-crimson bg-charcoal text-ivory shadow-2xl lg:py-14"
                    : "border-gold/40 bg-white"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-crimson px-4 py-1 text-xs uppercase tracking-[0.25em] text-white">
                    Most popular
                  </span>
                )}
                <h3 className="font-script text-5xl text-crimson">{pkg.name}</h3>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-gold">From</p>
                <p className="mt-1 font-serif text-4xl">{pkg.price}</p>
                <p className={`text-sm ${pkg.featured ? "text-ivory/60" : "text-charcoal/60"}`}>
                  per person
                </p>
                <ul className="mt-8 space-y-3 text-left">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={18} className="mt-0.5 shrink-0 text-crimson" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-charcoal/60">
          Prices are a guide and may change. Every package can be tailored — ask us during your
          visit.
        </p>
      </section>

      <section className="bg-white px-4 py-24 sm:px-6">
        <SectionHeading eyebrow="A taste of" title="Sample Menus" />
        <MenuTabs />
      </section>

      <CallToAction
        title="Plan your menu with us"
        text="Visit the hotel to discuss your menu, arrange a food tasting and build the perfect package for your celebration."
      />
    </>
  );
}
