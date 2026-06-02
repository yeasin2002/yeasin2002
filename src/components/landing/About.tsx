import { createClient } from '@/lib/supabase/server';
import {
  fetchAboutProfile,
} from '@/lib/about';
import { fetchSkillsBySlugs } from '@/lib/skills';
import Image from 'next/image';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default async function About() {
  const supabase = await createClient();
  const aboutProfile = await fetchAboutProfile(supabase);
  const skills = await fetchSkillsBySlugs(supabase, aboutProfile.skills);

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="About" heading="Me" />
      {/* About me */}
      <div className="mt-8 flex flex-col gap-4 md:flex-row">
        <Image
          src={aboutProfile.image}
          alt={aboutProfile.name}
          width={500}
          height={500}
          className="border-secondary size-60 rounded-md border-2 bg-blue-300 dark:bg-yellow-300"
        />
        <div className="mt-4">
          <h3 className="text-2xl font-bold">{aboutProfile.name}</h3>
          <p className="text-secondary mt-4">{aboutProfile.description}</p>
          <p className="text-secondary mt-8 font-bold">Skills</p>
          <div className="flex flex-wrap gap-2">
            {skills.length > 0
              ? skills.map((skill) => {
                  return (
                    <Tooltip key={skill.slug}>
                      <TooltipTrigger asChild>
                        <div className="mt-4 size-6 overflow-hidden rounded-full hover:cursor-pointer">
                          <Image
                            src={skill.imageUrl}
                            alt={skill.name}
                            width={24}
                            height={24}
                            className="size-6 rounded-full object-cover"
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>{skill.name}</TooltipContent>
                    </Tooltip>
                  );
                })
              : aboutProfile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="mt-4 rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-400"
                  >
                    {skill}
                  </span>
                ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
