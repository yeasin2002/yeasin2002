import { Squiggle } from "./Shapes";

export function SectionHeading({
  eyebrow,
  title,
  emphasis,
}: {
  eyebrow: string;
  title: string;
  emphasis?: string;
}) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-pop mb-3">
        ✦ {eyebrow}
      </p>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1] text-ink max-w-3xl">
        {title}{" "}
        {emphasis && (
          <em className="italic font-light text-indigo-pop">{emphasis}</em>
        )}
      </h2>
      <Squiggle className="mt-4 w-32 text-sunshine" />
    </div>
  );
}