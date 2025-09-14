import React, { useEffect, useRef } from "react";
import Typo from "@/components/Typo";
import { WORKS } from "@/data/projects";
import CustomCursorWrapper from "@/components/CustomCursor";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { PiCirclesFourFill } from "react-icons/pi";

gsap.registerPlugin(ScrollTrigger);

function ProjectItem({ project }: { project: any }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Create a ScrollTrigger instance to pin the image while its section is in view
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      pin: imageRef.current,
      pinSpacing: false,
    });
    // Cleanup on unmount
    return () => trigger.kill();
  }, []);

  return (
    <CustomCursorWrapper
      customCursorContent={
        <div className="w-28 h-28 rounded-full flex justify-center items-center overflow-hidden">
          <div className="center glass relative filter w-full h-full rounded-full"></div>
          <p className="center">view</p>
        </div>
      }
    >
      <div ref={sectionRef} className="h-screen w-full relative">
        <img
          ref={imageRef}
          src={project.img}
          alt="..."
          className="h-screen w-full object-cover brightness-50"
        />
        <div className="flex flex-col items-end center z-20">
          <Typo fixed className="md:text-[7vw] text-[15vw] uppercase">
            {project.title}
          </Typo>
          <Typo fixed sub className="md:text-[5vw] text-[10vw] -mt-[2vw]">
            {project.sub}
          </Typo>
        </div>
      </div>
    </CustomCursorWrapper>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-0">
      {WORKS.map((project, index) => (
        <Link href={`/projects/${project.id}`} key={index}>
          <ProjectItem key={index} project={project} />
        </Link>
      ))}
      <Link
        href="/projects"
        className=" absolute bottom-0 left-0 md:px-12 px-5 py-8  text-accent font-semibold tracking-widest group overflow-hidden"
      >
        <div className="flex items-center gap-1 md:text-base text-sm">
          <PiCirclesFourFill className="md:text-lg group-hover:rotate-45 duration-500" />
          <span>All Projects</span>
        </div>
        <div className="h-[0.5px] w-0 group-hover:w-full duration-500 bg-accent" />
      </Link>
    </section>
  );
}
