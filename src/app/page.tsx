// Temporary home page to preview the theme — the real sections come in Step 4.
export default function Home() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-32 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-gold">Welcome to</p>
      <h1 className="mt-2 font-script text-7xl text-crimson sm:text-8xl">
        Hotel Umaya
      </h1>
      <p className="mt-6 font-serif text-2xl text-charcoal">
        Where every celebration becomes a memory
      </p>
      <div className="mx-auto mt-8 h-px w-24 bg-gold" />
    </section>
  );
}
