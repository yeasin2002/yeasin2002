import Link from 'next/link';

export default function NotFoundComponent() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#f7f4ed]">
      {/* Ambient background glow & hero-style gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(135deg, #f7f4ed 0%, #f7f4ed 44%, #ffffff 67%, #ffe1c1 100%)',
        }}
      />

      {/* Decorative Radial Orb */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full sm:h-[650px] sm:w-[650px] md:right-10 md:top-10 opacity-70"
        style={{
          background:
            'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.95) 0 10%, rgba(255, 184, 107, 0.6) 35%, rgba(255, 122, 0, 0.22) 56%, transparent 72%)',
          filter: 'blur(1px)',
        }}
        aria-hidden="true"
      />

      {/* Decorative Visual System Orbits & Crosshairs */}
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div className="relative h-[650px] w-[650px] md:h-[800px] md:w-[800px]">
          {/* Concentric subtle rings */}
          <div className="absolute inset-0 rounded-full border border-foreground/[0.06]" />
          <div className="absolute inset-[15%] rounded-full border border-dashed border-foreground/[0.08]" />
          <div className="absolute inset-[32%] rounded-full border border-foreground/[0.05]" />

          {/* Precision crosshairs */}
          <span className="absolute top-1/2 left-4 -translate-y-1/2 font-mono text-[11px] text-foreground/25">
            +
          </span>
          <span className="absolute top-1/2 right-4 -translate-y-1/2 font-mono text-[11px] text-foreground/25">
            +
          </span>
          <span className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[11px] text-foreground/25">
            +
          </span>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[11px] text-foreground/25">
            +
          </span>

          {/* Visual system tag */}
          <div className="absolute top-12 right-12 font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/35">
            04 / DIRECTION ERROR
          </div>
        </div>
      </div>

      {/* Main 404 Hero Content */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          {/* Kicker */}
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/40 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-md">
            <span>04</span>
            <span className="h-1 w-1 rounded-full bg-primary" />
            <span>Page not found</span>
          </div>

          {/* Display 404 with editorial sans / serif contrast */}
          <h1 className="mt-6 text-[clamp(6rem,18vw,13rem)] font-bold leading-[0.8] tracking-[-0.06em] text-foreground select-none">
            4<em className="font-normal text-primary">0</em>4
          </h1>

          {/* Editorial Headline */}
          <h2 className="mt-5 text-[clamp(1.75rem,4.5vw,3rem)] font-bold tracking-tight text-foreground leading-tight">
            Lost in <em>direction.</em>
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed">
            The page you are looking for has been moved, archived, or does not
            exist. Let&apos;s guide you back to clarity.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="header-cta inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-foreground font-semibold text-sm bg-foreground text-background hover:bg-transparent hover:text-foreground transition-all duration-300 shadow-md"
            >
              Back to home <b>↗</b>
            </Link>

            <Link
              href="/#work"
              className="header-cta inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-foreground/20 font-semibold text-sm text-foreground hover:border-foreground hover:bg-white/60 transition-all duration-300"
            >
              Explore work <b>↓</b>
            </Link>
          </div>

          {/* Quick links footer inside 404 */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider text-muted-foreground font-medium border-t border-foreground/10 pt-6">
            <Link
              href="/#work"
              className="hover:text-foreground transition-colors"
            >
              Work
            </Link>
            <span className="text-foreground/20">•</span>
            <Link
              href="/#experience"
              className="hover:text-foreground transition-colors"
            >
              Experience
            </Link>
            <span className="text-foreground/20">•</span>
            <Link
              href="/#skills"
              className="hover:text-foreground transition-colors"
            >
              Skills
            </Link>
            <span className="text-foreground/20">•</span>
            <Link
              href="/#oss"
              className="hover:text-foreground transition-colors"
            >
              Open Source
            </Link>
            <span className="text-foreground/20">•</span>
            <Link
              href="/#contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </main>

      {/* Footer bar */}
      <footer className="relative z-10 flex flex-col sm:flex-row items-center justify-between px-6 py-6 max-w-[1490px] w-full mx-auto text-xs text-muted-foreground gap-3">
        <span>© 2026 Md Kawsar Islam Yeasin — Software Developer</span>
        <Link
          href="/"
          className="hover:text-foreground transition-colors flex items-center gap-1"
        >
          yeasin.dev ↗
        </Link>
      </footer>
    </div>
  );
}
