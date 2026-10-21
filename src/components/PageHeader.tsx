import Image from "next/image";

// Banner at the top of inner pages: background photo, script eyebrow and title.
export default function PageHeader({
  eyebrow,
  title,
  image,
}: {
  eyebrow: string;
  title: string;
  image: string;
}) {
  return (
    <section className="relative flex h-[45svh] min-h-[320px] items-center justify-center overflow-hidden bg-charcoal">
      <Image src={image} alt="" fill preload sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative px-4 text-center text-ivory [text-shadow:0_2px_12px_rgb(0_0_0/0.5)]">
        <p className="font-script text-5xl text-gold motion-safe:animate-fade-up sm:text-6xl">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-4xl uppercase tracking-[0.25em] motion-safe:animate-fade-up [animation-delay:200ms] sm:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
