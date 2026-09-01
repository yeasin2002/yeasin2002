import { SectionHeading } from './SectionHeading';
import { Star5 } from './Shapes';

const highlights = [
  { k: 'Expertise', v: 'Full-Stack & Mobile App Development' },
  { k: 'Front-End', v: 'TypeScript • React • Next.js • TailwindCSS' },
  { k: 'Mobile App', v: 'React Native • Expo' },
  { k: 'Backend', v: 'Node • Express/Nest • Mongo • PostgreSQL' },
  { k: 'Tools', v: 'Turborepo • Git and GitHub • Docker • GitHub CI/CD' },
  { k: 'Soft Skills', v: 'Debugging • communication • teamwork • leadership' },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 relative">
      <Star5 className="absolute top-10 right-10 w-10 h-10 text-blush rotate-12" />
      <SectionHeading
        eyebrow="About me"
        title="Curious builder,"
        emphasis="careful shipper"
      />

      <div className="grid lg:grid-cols-2 gap-10">
        <div className=" space-y-5 text-lg text-ink/80 leading-relaxed">
          <p>
            I&apos;m a front-end-focused full-stack developer with almost{' '}
            <strong className="text-ink">2 years</strong> of industry
            experience. I build web and mobile apps with TypeScript, React,
            Next.js, React Native, and Expo.
          </p>
          <p>
            I contribute to open source —{' '}
            <strong className="text-ink mx-1">622+ GitHub stars</strong> overall
            — and enjoy AI-driven workflows, agent-based development, close
            client collaboration, and maintainable freelance &amp; contract
            work.
          </p>
        </div>

        <div className="brutal-border bg-cream rounded-2xl p-6 brutal-shadow w-full">
          <dl className="divide-y divide-ink/15">
            {highlights.map((h) => (
              <div key={h.k} className="py-3 flex items-baseline gap-4">
                <dt className="font-mono text-xs uppercase tracking-wider text-indigo-pop w-30 shrink-0 ">
                  {h.k}
                </dt>
                <dd className="font-medium text-ink">{h.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
