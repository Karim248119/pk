import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesCard from "../components/ServicesCard";
import Typo from "../components/Typo";
import { SERVICES } from "../data/Services";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const cardsRef = useRef([]);
  cardsRef.current = [];

  // Helper function to collect refs
  const addToRefs = (el: never) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 400) {
      return;
    }
    cardsRef.current.forEach((card, i) => {
      // Define the starting x offset: first two from left, next two from right.
      const fromX = i < 2 ? -100 : 100;
      gsap.from(card, {
        x: fromX,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 100%", // Adjust as needed for when the animation should start
          end: "bottom 100%", // Adjust as needed for when the animation should complete
          scrub: true, // Links the animation progress to the scrollbar
          markers: false, // Remove or comment out once you're satisfied with the effect
        },
      });
    });
  }, []);

  return (
    <section
      id="Services"
      className="flex flex-col gap-10 justify-center items-center min-h-screen py-20 bg-black"
    >
      <div className="flex items-center ">
        <Typo sub className="text-[5vw]">
          My
        </Typo>
        <Typo className="text-[10vw] uppercase">Services</Typo>
      </div>
      <div className="flex-grow w-full flex flex-col items-center ">
        <div className="sm:w-[80%] w-[90%] grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} ref={addToRefs}>
              <ServicesCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
