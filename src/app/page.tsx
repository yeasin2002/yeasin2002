'use client';

import { About } from '@/components/portfolio/About';
import { CTA } from '@/components/portfolio/CTA';
import { Experience } from '@/components/portfolio/Experience';
import { Footer } from '@/components/portfolio/Footer';
import { Hero } from '@/components/portfolio/Hero';
import { Navbar } from '@/components/portfolio/Navbar';
import { Projects } from '@/components/portfolio/Projects';
import { Skills } from '@/components/portfolio/Skills';
import { GithubStatus } from '@/components/portfolio/github-status';

export default function MainPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <GithubStatus />
        {/* <Quote /> */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
