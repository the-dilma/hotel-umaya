import Reveal from "./Reveal";

// Script eyebrow + serif title + gold divider, used to open each section.
export default function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <Reveal className="mb-14 text-center">
      <p className="font-script text-4xl text-crimson sm:text-5xl">{eyebrow}</p>
      <h2
        className={`mt-1 text-3xl uppercase tracking-[0.2em] sm:text-4xl ${
          light ? "text-ivory" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-6 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-gold" />
        <span className="size-1.5 rotate-45 bg-gold" />
        <span className="h-px w-12 bg-gold" />
      </div>
    </Reveal>
  );
}
