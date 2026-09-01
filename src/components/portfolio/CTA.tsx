import { Asterisk, Star5 } from './Shapes';

const socials = [
  { name: 'GitHub', href: 'https://github.com/yeasin2002' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/yeasin2002-dev/' },
  { name: 'X', href: 'https://x.com/yeasin2002_dev' },
  { name: 'Email', href: 'mailto:mdkawsarislam2002@gmail.com' },
];

export function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
      <div className="relative">
        <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[32px] bg-ink" />
        <div className="relative rounded-[32px] brutal-border bg-indigo-pop text-cream p-10 md:p-16 overflow-hidden">
          <Star5 className="absolute top-6 right-8 w-16 h-16 text-sunshine" />
          <Asterisk className="absolute bottom-2 left-8 size-8 md:size-12 text-blush" />

          <p className="font-mono text-xs uppercase tracking-[0.25em] text-sunshine mb-4">
            ✦ Let&apos;s build something
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-[0.95] max-w-3xl">
            You made it this far —{' '}
            <em className="italic font-light text-sunshine">let&apos;s talk</em>{' '}
            about your next project.
          </h2>
          <p className="mt-6 max-w-xl text-cream/85 text-lg">
            Open to freelance, agency partnerships, and product builds across
            web, mobile, and AI-driven workflows.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:mdkawsarislam2002@gmail.com"
              className="rounded-full bg-cream text-ink px-7 py-3.5 text-sm font-semibold hover:bg-sunshine transition-colors brutal-shadow"
            >
              mdkawsarislam2002@gmail.com →
            </a>
            {/* <a
              href="https://cal.com/yeasin2002/15min"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-cream text-cream px-7 py-3.5 text-sm font-semibold hover:bg-cream hover:text-ink transition-colors"
            >
              Book a 15-min intro
            </a> */}
          </div>

          <div className="mt-10 pt-8 border-t border-cream/20 flex flex-wrap items-center gap-6 text-sm">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-cream/80 hover:text-sunshine transition-colors font-medium"
              >
                {s.name} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
