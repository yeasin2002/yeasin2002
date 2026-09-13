import { About } from '@/app/components/about';
import { Contact } from '@/app/components/contact';
import { Experience } from '@/app/components/experience';
import { GithubStatus } from '@/app/components/github-status';
import { Header } from '@/app/components/header';
import { Hero } from '@/app/components/hero';
import { PointOfView } from '@/app/components/point-of-view';
import { Process } from '@/app/components/process';
import { SelectedWork } from '@/app/components/selected-work';
import { Services } from '@/app/components/services';
import { Ticker } from '@/app/components/ticker';

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
