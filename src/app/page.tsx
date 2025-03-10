"use client";
import Hero from "./sections/Hero";
import Navbar from "./components/Nav";
import Footer from "./sections/Footer";
import Services from "./sections/Services";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <div className="text-accent relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
