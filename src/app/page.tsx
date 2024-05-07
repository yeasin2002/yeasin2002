import { FloatingNav } from "$components/Nav/floating-navbar";
import About from "@/sections/About/About";
import Footer from "@/sections/Footer/Footer";
import { HeroSpotlight } from "@/sections/Hero/HeroSpotlight";
import ProjectNext from "@/sections/ProjectNext/ProjectNext";
import Skills from "@/sections/Skills/Skills";
import Contact from "@/sections/contact/Contact";

import { Toaster } from "react-hot-toast";

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
      <Toaster />
    </>
  );
}
