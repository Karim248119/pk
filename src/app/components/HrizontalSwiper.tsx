// HorizontalSlider.jsx
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typo from "./Typo";
import { SKILLS } from "../data/Skills";

gsap.registerPlugin(ScrollTrigger);

const HorizontalSlider = () => {
  const sliderRef = useRef<any>(null);

  useEffect(() => {
    const horizontalPanels = gsap.utils.toArray(
      sliderRef.current.querySelectorAll(".panel")
    );

    gsap.to(horizontalPanels, {
      xPercent:
        (window.innerWidth < 400 ? -100 : -60) * (horizontalPanels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sliderRef.current,
        pin: true,
        scrub: 1,
        end: "+=3000", // Same fixed value as your reference
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className="container horizontal overflow-hidden h-[100vh] flex items-end bg-accent"
    >
      {/* <div className=" absolute top-0 left-0 w-full h-[45vh] text-black text-4xl flex justify-center items-center z-20">
        <Typo fixed sub className="text-[4vw]">
          My
        </Typo>
        <Typo fixed className="text-[8vw] uppercase">
          Skills
        </Typo>
      </div> */}
      {SKILLS.map((skill, index) => {
        return (
          <section
            key={index}
            className="relative panel group bg-accent md:w-[33vw] w-[100vw] h-[85vh] flex-shrink-0 flex flex-col justify-evenly gap-5 p-10  text-black border border-l-0 border-black"
          >
            <Typo sub fixed className="text-4xl">
              0{index + 1} .
            </Typo>
            <img src={skill.img} className="md:w-28 w-20 spin" alt="..." />
            <div className=" z-0 h-full">
              <Typo
                fixed
                className="md:text-4xl text-2xl capitalize md:mb-8 mb-5"
              >
                {skill.title}
              </Typo>
              <div>
                {skill.items.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center md:gap-4 md:p-4 p-3 gap-3 md:text-base text-sm border-black capitalize ${
                      i !== skill.items.length - 1 && "border-b"
                    }`}
                  >
                    <div className="h-2 w-2 bg-black/50 rounded-full" />
                    <span>0{i + 1} .</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default HorizontalSlider;
