import { FloatingNav } from "$components/Nav/floating-navbar";
import { navItems } from "@/data";
import About from "@/sections/About/About";
import Footer from "@/sections/Footer/Footer";
import { HeroSpotlight } from "@/sections/Hero/HeroSpotlight";
import ProjectNext from "@/sections/ProjectNext/ProjectNext";
import Skills from "@/sections/Skills/Skills";
import Contact from "@/sections/contact/Contact";

export default function Home() {
  return (
    <>
      <FloatingNav />
      <HeroSpotlight />
      <About />
      <Skills />
      <ProjectNext />
      <Contact />
      <Footer />
    </>
  );
}
