import { About } from '@/components/homepage/about';
import { Contact } from '@/components/homepage/contact';
import { Experience } from '@/components/homepage/experience';
import { GithubStatus } from '@/components/homepage/github-status';
import { Header } from '@/components/homepage/header';
import { Hero } from '@/components/homepage/hero';
import { PointOfView } from '@/components/homepage/point-of-view';
import { Process } from '@/components/homepage/process';
import { SelectedWork } from '@/components/homepage/selected-work';
import { Services } from '@/components/homepage/services';
import { Ticker } from '@/components/homepage/ticker';

export default function RootPage() {
  return (
    <main id="top" className="bg-background text-foreground">
      <Header />
      <Hero />
      <Ticker />
      <SelectedWork />
      <PointOfView />
      <Experience />
      <Services />
      <About />
      <GithubStatus />
      <Process />
      <Contact />
    </main>
  );
}
