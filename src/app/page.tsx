// components
import Nav from "@/components/Nav/Nav";
import About from "@/pages/About/About";
import Footer from "@/pages/Footer/Footer";
import Hero from "@/pages/Hero/Hero";
import ProjectNext from "@/pages/ProjectNext/ProjectNext";
import Skills from "@/pages/Skills/Skills";

import Contact from "@/pages/contact/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <ProjectNext />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}
