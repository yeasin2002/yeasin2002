import Container from '@/components/common/Container';
import { ExperienceList } from '@/components/experience/ExperienceList';
import { Separator } from '@/components/ui/separator';
import {
  type Experience,
  experiences as fallbackExperiences,
} from '@/config/Experience';
import { generateMetadata as getMetadata } from '@/config/Meta';
import {
  type ExperienceRow,
  mapExperienceRowToExperience,
} from '@/lib/experience';
import { createClient } from '@/lib/supabase/server';
import { Metadata } from 'next';
import { Robots } from 'next/dist/lib/metadata/types/metadata-types';

export const metadata: Metadata = {
  ...getMetadata('/work-experience'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  } as Robots,
};

export const dynamic = 'force-dynamic';

export default async function WorkExperiencePage() {
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
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Work Experience
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            My work experiences across different companies and roles.
          </p>
        </div>

        <Separator />

        {/* Work Experiences */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              All Experiences
              {list.length > 0 && (
                <span className="text-muted-foreground ml-2 text-sm font-normal">
                  ({list.length}{' '}
                  {list.length === 1 ? 'experience' : 'experiences'})
                </span>
              )}
            </h2>
          </div>

          <ExperienceList experiences={list} />
        </div>
      </div>
    </Container>
  );
}
