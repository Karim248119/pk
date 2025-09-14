"use client";
import { projects } from "../data/projects";
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../components/Logo";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden w-screen h-[100vh] text-primary py-32">
      <div className="absolute top-0 left-0 w-full h-20 flex items-center justify-between px-20">
        <Logo />
        <button onClick={() => setSelectedProject(null)}>CLOSE</button>
      </div>
      <div
        className={`flex h-full items-center select-none justify-center overflow-hidden ${
          selectedProject ? "" : "gap-4  px-10"
        }
        `}
      >
        {projects.map((item, index) => {
          const idx = index + 1;
          return (
            <div
              key={idx}
              onClick={() => {
                setSelectedProject(idx);
              }}
              className={`relative  group  duration-700 ${
                selectedProject === idx
                  ? "grayscale-0 brightness-90"
                  : "grayscale brightness-75"
              }
            ${selectedProject ? "h-[55vh]" : "h-[40vh]"}
            ${selectedProject === idx ? "w-[40vw] mx-[10vw]" : "w-[5vw]"}
            ${
              selectedProject &&
              (selectedProject + 1 === idx || selectedProject - 1 === idx) &&
              "!w-[25vw]"
            }
            ${
              selectedProject &&
              selectedProject !== idx &&
              selectedProject + 1 !== idx &&
              selectedProject - 1 !== idx &&
              "!w-0"
            }
            `}
            >
              <img
                src={item.img}
                alt={item.title}
                className=" w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
