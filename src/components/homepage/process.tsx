const steps = [
  {
    id: '01',
    title: 'Discover & Scope',
    description:
      'Understand the core product objectives, target users, edge cases, and architectural constraints.',
  },
  {
    id: '02',
    title: 'Architecture',
    description:
      'Design data models, API contracts, state management, and component hierarchies for long-term scalability.',
  },
  {
    id: '03',
    title: 'Build & Polish',
    description:
      'Write clean, type-safe code with strict standards, fluid micro-interactions, and WCAG accessibility.',
  },
  {
    id: '04',
    title: 'Ship & Monitor',
    description:
      'Deploy via CI/CD, verify Lighthouse 90+ benchmarks, configure monitoring, and optimize in production.',
  },
];

export function Process() {
  return (
    <section className="process-band section-pad py-24 md:py-32 border-t border-white/10">
      <div className="mx-auto max-w-[1490px]">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="section-kicker text-[#888888]">07 — How I work</span>
          <h2 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight text-white">
            Disciplined process.
            <br />
            <em className="font-serif font-normal italic">Serious craft.</em>
          </h2>
        </div>

        {/* 4-Step Grid with full borders and distinct background cards */}
        <div className="process-grid-wrapper">
          {steps.map((step) => (
            <article key={step.id} className="process-card">
              <span className="process-num">{step.id}</span>
              <div className="process-card-content">
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-desc">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
