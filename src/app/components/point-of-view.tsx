export function PointOfView() {
  return (
    <section className="dark-band section-pad py-24 md:py-36">
      <div className="mx-auto grid max-w-[1490px] items-center gap-12 md:grid-cols-12">
        {/* Kicker */}
        <div className="md:col-span-2 text-[11px] font-mono uppercase tracking-wider text-[#999]">
          <span>02</span>
          <span className="block mt-1 text-[#aaa]">Point of view</span>
        </div>

        {/* Center: Headline and Manifesto */}
        <div className="md:col-span-7">
          <h2 className="statement-title">
            Not just code.
            <br />
            <em>User delight.</em>
          </h2>
          <p className="mt-8 max-w-xl text-base md:text-[17px] leading-relaxed text-[#aaa]">
            I turn complex product requirements into clean, resilient software
            products that are fast enough to feel invisible, intuitive enough to
            need no manual, and architected to scale.
          </p>
        </div>

        {/* Right: Circular Seal Badge */}
        <div
          className="md:col-span-3 flex justify-start md:justify-end"
          aria-label="Yeasin Software Dev Est. 2024"
        >
          <div className="seal-stamp">
            <div>
              YEASIN
              <br />
              SOFTWARE
              <br />
              DEV
              <br />
              <span>EST. 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
