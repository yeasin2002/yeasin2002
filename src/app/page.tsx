import Container from '@/components/common/Container';
import About from '@/components/landing/About';
import Blog from '@/components/landing/Blog';
import CTA from '@/components/landing/CTA';
import Experience from '@/components/landing/Experience';
import Github from '@/components/landing/GithubClient';
import Hero from '@/components/landing/Hero';
import Journey from '@/components/landing/Journey';
import Work from '@/components/landing/Projects';
import Setup from '@/components/landing/Setup';

export const dynamic = 'force-dynamic';

export default function page() {
  return (
    <div className="min-h-screen py-16 animate-fade-in-blur container mx-auto max-w-7xl">
      <Hero />
      <Experience />
      <Work />
      <About />
      <Github />
      <Blog />
      <CTA />
      <Setup />
      <Journey />
    </div>
  );
}
