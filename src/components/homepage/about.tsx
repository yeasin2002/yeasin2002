import { ABOUT_DATA } from '@/data';

export function About() {
  return (
    <section
      id="about"
      className="about-section-container section-pad py-24 md:py-32 scroll-mt-12"
    >
      <div className="mx-auto max-w-[1490px]">
        {/* Section Heading */}
        <div className="section-heading mb-16 md:mb-20">
          <div>
            <span className="section-kicker">{ABOUT_DATA.kicker}</span>
            <h2>
              Curious builder,
              <br />
              <em>careful shipper.</em>
            </h2>
          </div>
          <p className="self-end text-sm md:text-base leading-relaxed text-muted-foreground">
            {ABOUT_DATA.lead}
          </p>
        </div>

        {/* Studio Grid with big stat */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-foreground/15 pt-14">
          {/* Big Stat Left */}
          <div className="lg:col-span-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-foreground/15 pb-12 lg:pb-0 lg:pr-12">
            <span className="about-big-stat font-extrabold text-foreground">
              {ABOUT_DATA.bigStat.value}
            </span>
            <p className="mt-8 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              {ABOUT_DATA.bigStat.label}
            </p>
          </div>

          {/* Text and Mini Stats Right */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-10 lg:pl-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold leading-snug tracking-tight text-foreground">
              {ABOUT_DATA.statement}
            </p>

            <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed border-t border-foreground/15 pt-6">
              <p>
                <strong className="text-foreground font-semibold">
                  Specialization:
                </strong>{' '}
                {ABOUT_DATA.specialization}
              </p>
              <p>
                <strong className="text-foreground font-semibold">
                  Focus Areas:
                </strong>{' '}
                {ABOUT_DATA.focusAreas}
              </p>
            </div>

            {/* Mini Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-foreground/15">
              {ABOUT_DATA.miniStats.map((stat) => (
                <div key={stat.label}>
                  <strong className="block text-3xl md:text-4xl font-bold text-foreground">
                    {stat.value}
                  </strong>
                  <span className="mt-2 block text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
