import {
  type Experience,
  experiences as fallbackExperiences,
} from '@/config/Experience';
import {
  type ExperienceRow,
  mapExperienceRowToExperience,
} from '@/lib/experience';
import { createClient } from '@/lib/supabase/server';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ExperienceCard } from '../experience/ExperienceCard';
import { Button } from '../ui/button';

export default async function Experience() {
  let list: Experience[] = [];
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error || !data || data.length === 0) {
      list = fallbackExperiences;
    } else {
      list = data.map((exp: ExperienceRow) =>
        mapExperienceRowToExperience(exp),
      );
    }
  } catch (e) {
    console.error('Error fetching experiences from Supabase:', e);
    list = fallbackExperiences;
  }

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Experience" />
      <div className="mt-4 flex flex-col gap-8">
        {list.slice(0, 2).map((experience: Experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/work-experience">Show all work experiences</Link>
        </Button>
      </div>
    </Container>
  );
}
