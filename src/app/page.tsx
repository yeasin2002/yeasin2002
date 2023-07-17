"use client";

// components
import Nav from "@/components/Nav/Nav";
import Hero from "@/pages/Hero/Hero";
import About from "@/pages/About/About";
import Skills from "@/pages/Skills/Skills";
import useColorTheme from "@/hooks/useColorTheme";
import Testimonials from "@/pages/Testimonials/Testimonials";
import Projects from "@/pages/projects/Projects";
import Contact from "@/pages/contact/Contact";
import Footer from "@/pages/Footer/Footer";
import PageWrapper from "@/components/Globals/PageWrapper";

export default function Home() {
  const { color, BgColor } = useColorTheme();

  return (
    <PageWrapper>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </PageWrapper>
  );
}
