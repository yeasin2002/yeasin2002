"use client";
import { themeContext } from "@/context/ThemeProvider";
import { useContext } from "react";

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
  // const { theme } = useContext(themeContext);

  return (
    <div className={`${BgColor}  ${color}   container  `}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
