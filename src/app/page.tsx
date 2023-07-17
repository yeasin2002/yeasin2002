"use client";

// components
import Nav from "@/components/Nav/Nav";
import Hero from "@/pages/Hero/Hero";
import About from "@/pages/About/About";
import Skills from "@/pages/Skills/Skills";
import Testimonials from "@/pages/Testimonials/Testimonials";
import Projects from "@/pages/projects/Projects";
import Contact from "@/pages/contact/Contact";
import Footer from "@/pages/Footer/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
