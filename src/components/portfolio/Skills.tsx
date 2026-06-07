import { skills } from '@/data/skills.data';
import Image from 'next/image';

import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Toolbox"
        title="The stack I"
        emphasis="reach for daily"
      />
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className={`rounded-full brutal-border px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-1 flex  items-center gap-x-1 ${
              i % 4 === 0
                ? 'bg-sunshine text-ink'
                : i % 4 === 1
                  ? 'bg-indigo-pop text-cream'
                  : i % 4 === 2
                    ? 'bg-blush text-ink'
                    : 'bg-cream text-ink'
            }`}
          >
            <Image src={skill.icon} alt={skill.name} width={30} height={30} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
