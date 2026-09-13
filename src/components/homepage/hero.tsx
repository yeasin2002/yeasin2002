import heroPortrait from '@/assets/me/hero-alt-2.png';
import { HERO_DATA, HERO_METRICS } from '@/data';
import { FileText } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="hero-section section-pad">
      {/* Background low-opacity gradient pill */}
      <div className="hero-gradient-pill" aria-hidden="true" />

      <div className="mx-auto w-full max-w-372.5 relative z-10">
        {/* Top Eyebrow */}
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
          <span>{HERO_DATA.eyebrow}</span>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 items-center lg:grid-cols-12 lg:gap-12 pt-6 md:pt-10">
          {/* Left: Headline */}
          <div className="lg:col-span-7 z-10">
            <h1 className="hero-title">
              <span>I craft</span>
              <em className="font-serif italic font-normal ml-[4vw] md:ml-[7vw]">
                delightful
              </em>
              <span>web &amp; mobile</span>
              <span>products.</span>
            </h1>
          </div>

          {/* Right: Editorial Luxury Portrait */}
          <div className="relative mt-10 lg:mt-0 lg:col-span-5 flex justify-center">
            <div className="hero-portrait-wrap">
              <div className="crosshair -left-3 -top-3 hidden sm:block" />
              <div className="crosshair -right-3 -bottom-3 hidden sm:block" />

              {/* Editorial Frame with Image */}
              <div className="hero-portrait-frame">
                <Image
                  src={heroPortrait}
                  alt={`${HERO_DATA.name} - Software Developer`}
                  priority
                  width={1000}
                  height={1180}
                  sizes="(max-width: 768px) 94vw, (max-width: 1200px) 48vw, 530px"
                  className="hero-portrait-img"
                />
              </div>

              {/* Editorial Rotating Seal / Monogram Badge */}
              <div className="hero-seal-badge" aria-hidden="true">
                <svg viewBox="0 0 160 160" className="hero-seal-svg">
                  <path
                    id="sealCircle"
                    d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                    fill="none"
                  />
                  <text className="text-[9px] font-mono font-bold uppercase tracking-[0.24em] fill-current">
                    <textPath href="#sealCircle" startOffset="0%">
                      YEASIN • FULL-STACK ENGINEER • CRAFT •
                    </textPath>
                  </text>
                </svg>
                <div className="hero-seal-core">
                  <span>DEV®</span>
                </div>
              </div>

              {/* Editorial Section Kicker Tag */}
              <div className="art-tag">01 / PORTRAIT</div>
            </div>
          </div>
        </div>

        {/* Bio & Action Buttons */}
        <div className="mt-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 border-t border-foreground/10 pt-8">
          <div className="max-w-140">
            <p className="text-base md:text-[17px] leading-relaxed text-foreground/80">
              Hola, I&apos;m{' '}
              <strong className="font-bold text-foreground">
                {HERO_DATA.name}
              </strong>{' '}
              — {HERO_DATA.bio}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={HERO_DATA.cvPath}
                download={HERO_DATA.cvFilename}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/30 text-xs font-mono uppercase tracking-wider font-semibold hover:bg-foreground hover:text-background transition-colors"
                aria-label="Download CV PDF"
              >
                <FileText size={14} />
                <span>Resume / CV</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-xs font-mono uppercase tracking-wider font-semibold hover:bg-primary hover:text-foreground transition-colors"
              >
                <span>Hire me</span>
              </a>
            </div>
          </div>
        </div>

        {/* Key Metrics Bar */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-foreground/10 pt-8">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label}>
              <span className="block text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                {metric.value}
              </span>
              <span className="mt-1 block text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
