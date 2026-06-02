import { fetchAboutProfile } from '@/lib/about';
import { fetchSkillsBySlugs } from '@/lib/skills';
import { createClient } from '@/lib/supabase/server';
import Image from 'next/image';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Skill from '../common/Skill';





type mySkills = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  sortOrder: 0;
  createdAt: string;
  updatedAt: string;
};

export default async function About() {
  const supabase = await createClient();
  const aboutProfile = await fetchAboutProfile(supabase);
  const skills = (await fetchSkillsBySlugs(
    supabase,
    aboutProfile.skills,
  )) as mySkills[];

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
          <div className="flex flex-wrap gap-2 mt-1">
            {skills.length > 0 &&
              skills.map((skill) => (
                <Skill key={skill.id} name={skill.name} href={''}>
                  <img src={skill.imageUrl} alt={skill.name} />
                </Skill>
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
}