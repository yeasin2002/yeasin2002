"use client";
import { themeContext } from "@/context/ThemeProvider";
import { useContext } from "react";

// components
import Nav from "@/components/Nav/Nav";
import Hero from "@/pages/Hero";

export default function Home() {
  const { theme } = useContext(themeContext);

  return (
    <main className={`w-screen h-screen ${theme}`}>
      <Nav />
      <Hero />
    </main>
  );
}
