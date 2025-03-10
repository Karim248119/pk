import React, { useEffect, useRef } from "react";
import Typo from "../components/Typo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button";
import { VscGithubAlt } from "react-icons/vsc";
import { RiLinkedinLine } from "react-icons/ri";

export default function About() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 400) {
      return;
    }
    gsap.to(imgRef.current, {
      xPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);
  return (
    <section
      className="min-h-screen w-full relative bg-accent flex flex-col-reverse md:flex-row md:justify-center items-center"
      ref={containerRef}
    >
      <div className="h-[50vh] md:w-[20vw] w-[70vw] md:border-l-2 border-black overflow-hidden relative ml-5 ">
        <img
          src="/a2.png"
          alt="..."
          className="h-full w-auto absolute bottom-0 object-cover md:-left-36 "
          ref={imgRef}
        />
      </div>
      <div className="p-5">
        <Typo
          fixed
          sub
          className="text-3xl text-black mb-5 ${Fonts.fancy.className"
        >
          About
        </Typo>
        <p className="text-black md:w-[30vw] md:text-base text-xs">
          I am a passionate self-taught front-end developer. I love coding
          creative UIs and bringing designs to life with clean, efficient code.
          My expertise includes building responsive and user friendly websites
          and applications, constantly learning and adapting to new technologies
          and trends to deliver the best digital experiences.
        </p>
        <div className="mt-5 flex  items-center md:items-start gap-2">
          <a href="/Karim Abelhalim.pdf" download>
            <Button className="md:h-10 h-8 md:w-52 w-32 rounded md:text-base text-xs">
              Download CV
            </Button>
          </a>
          <a target="_blank" href="https://github.com/Karim248119">
            <Button className="md:h-10 h-8 md:w-10 w-8 rounded md:text-2xl ">
              <VscGithubAlt />
            </Button>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/karim248/">
            <Button className="md:h-10 h-8 md:w-10 w-8 rounded md:text-2xl ">
              <RiLinkedinLine />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
