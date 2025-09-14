"use client";
import Hero from "./sections/Hero";
import Navbar from "@/components/Nav";
import Footer from "./sections/Footer";
import Services from "./sections/Services";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import ScrollToTop from "@/components/ScrollToTop";
import Courses from "./sections/Courses";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="text-accent relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Courses />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
