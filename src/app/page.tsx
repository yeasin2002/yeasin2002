"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
// components
import Nav from "@/components/Nav/Nav";
import Hero from "@/pages/Hero/Hero";
import About from "@/pages/About/About";
import Skills from "@/pages/Skills/Skills";
import Testimonials from "@/pages/Testimonials/Testimonials";
import Contact from "@/pages/contact/Contact";
import Footer from "@/pages/Footer/Footer";
import ProjectNext from "@/pages/ProjectNext/ProjectNext";

export default function Home() {
  return (
    <ReactLenis root>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <ProjectNext />
      <Testimonials />
      <Contact />
      <Footer />
    </ReactLenis>
  );
}
