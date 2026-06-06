'use client';

import { About } from '@/components/portfolio/About';
import { CTA } from '@/components/portfolio/CTA';
import { Experience } from '@/components/portfolio/Experience';
import { Footer } from '@/components/portfolio/Footer';
import { Hero } from '@/components/portfolio/Hero';
import { Navbar } from '@/components/portfolio/Navbar';
import { Projects } from '@/components/portfolio/Projects';
import { Quote } from '@/components/portfolio/Quote';
import { Skills } from '@/components/portfolio/Skills';





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
        <Quote />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}



// export const Route = createFileRoute('/')({
//   head: () => ({
//     meta: [
//       { title: 'Md Kawsar Islam Yeasin — Junior Software Developer' },
//       {
//         name: 'description',
//         content:
//           'Front-end-focused full-stack developer. I build delightful web & mobile products with TypeScript, React, Next.js and React Native.',
//       },
//       {
//         property: 'og:title',
//         content: 'Md Kawsar Islam Yeasin — Junior Software Developer',
//       },
//       {
//         property: 'og:description',
//         content: 'Portfolio of a front-end-focused full-stack developer.',
//       },
//     ],
//   }),
//   component: Index,
// });