export function Quote() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <figure className="relative">
        <span className="absolute -top-10 -left-2 font-display text-[10rem] leading-none text-indigo-pop/20 select-none">
          “
        </span>
        <blockquote className="relative font-display text-3xl md:text-4xl lg:text-5xl font-light italic leading-tight text-ink">
          Just because I give you advice doesn't mean I'm smarter than you...
          <br />
          It means I've made more mistakes.
        </blockquote>
        <figcaption className="mt-6 font-mono text-xs uppercase tracking-widest text-indigo-pop">
          — Alfa wolf
        </figcaption>
      </figure>
    </section>
  );
}
