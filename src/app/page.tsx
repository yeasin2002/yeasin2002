"use client";
import { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

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

  return (
    <motion.div
      className={`${BgColor}  ${color}   container  `}
      // onMouseMove={handleMouseMove}
    >
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
