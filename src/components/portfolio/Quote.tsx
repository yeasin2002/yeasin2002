export function Quote() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <figure className="relative">
        <span className="absolute -top-10 -left-2 font-display text-[10rem] leading-none text-indigo-pop/20 select-none">
          “
        </span>
        <blockquote className="relative font-display text-3xl md:text-4xl lg:text-5xl font-light italic leading-tight text-ink">
          A man who is master of patience is master of everything else.
        </blockquote>
        <figcaption className="mt-6 font-mono text-xs uppercase tracking-widest text-indigo-pop">
          — George Savile
        </figcaption>
      </figure>
    </section>
  );
}