import portrait from '@/assets/hero-alt-2.png';
import Image from 'next/image';

import { Asterisk, Star5, Star8 } from './Shapes';

const stats = [
  { value: '2+', label: 'Years building\nshipped products' },
  { value: '10+', label: 'Client & freelance\nprojects delivered' },
  { value: '622+', label: 'GitHub stars\nacross open source' },
  { value: '5+', label: 'AI integrations\nshipped to prod' },
];

export function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-16 pb-12 lg:pt-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div className="relative">
          <Star5 className="absolute -top-6 -left-2 w-14 h-14 text-indigo-pop rotate-12" />
          <div className="relative brutal-border bg-cream px-6 py-8 md:px-10 md:py-12">
            {/* corner squares */}
            <span className="absolute -top-2 -left-2 w-4 h-4 bg-sunshine brutal-border" />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-sunshine brutal-border" />
            <span className="absolute -bottom-2 -left-2 w-4 h-4 bg-sunshine brutal-border" />
            <span className="absolute -bottom-2 -right-2 w-4 h-4 bg-sunshine brutal-border" />
            <p className="font-mono text-xs uppercase tracking-widest text-indigo-pop mb-3">
              Software Developer • Bangladesh
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] text-ink">
              I craft{' '}
              <em className="italic font-light text-indigo-pop">delightful</em>{' '}
              web &amp; mobile products
            </h1>
          </div>

          <p className="mt-8 max-w-lg text-base md:text-lg text-ink/75 leading-relaxed">
            Hola, I&apos;m{' '}
            <strong className="text-ink">Md Kawsar Islam Yeasin</strong> —
            Front-end-focused full-stack software developer with almost 2 years
            of experience, skilled in building scalable, responsive, and
            high-performance applications. Strong in modern web technologies,
            clean code, problem-solving, and AI-driven development.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-ink text-cream px-7 py-3.5 text-sm font-semibold hover:bg-indigo-pop  hover:brutal-shadow transition-all"
            >
              See my work →
            </a>
            <a
              href="/assets/cv.pdf"
              download
              className="rounded-full bg-cream text-ink px-7 py-3.5 text-sm font-semibold brutal-border hover:bg-sunshine transition-colors"
            >
              Resume / CV
            </a>
          </div>
        </div>

        {/* Right: portrait card */}
        <div className="relative flex justify-center lg:justify-end">
          <Star8 className="absolute -top-4 -left-2 md:left-4 w-20 h-20 text-sunshine z-20" />
          <Asterisk className="absolute -bottom-2 -right-2 md:right-6 w-16 h-16 text-blush z-20" />

          {/* shadow card */}
          <div className="absolute top-4 left-4 w-[85%] h-[95%] rounded-[28px] bg-ink" />
          <div className="relative w-full max-w-md aspect-4/5 rounded-[28px] bg-indigo-pop brutal-border overflow-hidden">
            {/* decorative blobs */}
            {/* <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-cream/95" /> */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-cream/95" />
            <Image
              src={portrait}
              alt="Md Kawsar Islam Yeasin portrait"
              width={896}
              height={1024}
              className="absolute inset-0 w-full h-full object-cover object-top "
            />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative mt-16">
        <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[28px] bg-ink" />
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 rounded-[28px] bg-sunshine brutal-border px-6 md:px-10 py-8">
          {stats.map((s) => (
            <div key={s.value}>
              <div className="font-display text-3xl md:text-4xl font-bold text-ink">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-ink/80 whitespace-pre-line leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
