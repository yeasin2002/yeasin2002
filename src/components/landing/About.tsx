import { createClient } from '@/lib/supabase/server';
import {
  fetchAboutProfile,
  renderAboutSkillIcon,
} from '@/lib/about';
import Image from 'next/image';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default async function About() {
  const supabase = await createClient();
  const aboutProfile = await fetchAboutProfile(supabase);

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
            {aboutProfile.skills.map((skill) => {
              const skillIcon = renderAboutSkillIcon(skill);

              if (!skillIcon) {
                return null;
              }

              return (
                <Tooltip key={skill}>
                  <TooltipTrigger asChild>
                    <div className="mt-4 size-6 hover:cursor-pointer">
                      {skillIcon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>{skill}</TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
