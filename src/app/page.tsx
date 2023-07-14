"use client";
import { useScroll, useTransform, motion } from "framer-motion";

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

export default function Home() {
  const { color, BgColor } = useColorTheme();
  const { scrollXProgress } = useScroll();
  const y = useTransform(scrollXProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.div className={`${BgColor}  ${color}   container  `}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </motion.div>
  );
}
