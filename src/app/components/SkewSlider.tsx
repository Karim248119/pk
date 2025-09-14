"use client";
import { projects } from "../data/projects";
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../components/Logo";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (!containerRef.current || !sliderRef.current) return;

    const container = containerRef.current;
    const slider = sliderRef.current;
    const totalScroll = slider.scrollWidth - container.clientWidth;

    const ctx = gsap.context(() => {
      gsap.to(slider, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          id: "projectsScroll", // give it an id so we can target it
          trigger: container,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const velocity = self.getVelocity();
            const scaleBoost = gsap.utils.clamp(
              0,
              0.2,
              Math.abs(velocity) / 2000
            );

            imageRefs.current.forEach((el, i) => {
              gsap.to(el, {
                scale: 1 + scaleBoost,
                duration: 0.3,
                delay: i * 0.04,
                ease: "power3.out",
              });
            });
          },
        },
      });

      ScrollTrigger.addEventListener("scrollEnd", () => {
        imageRefs.current.forEach((el, i) => {
          gsap.to(el, {
            scale: 1,
            duration: 0.3,
            delay: i * 0.04,
            ease: "power3.out",
          });
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-[100vh] text-primary py-32"
    >
      <div className="absolute top-0 left-0 w-full h-20 flex items-center justify-between px-20 z-50">
        <Logo />
        <button
          onClick={() => {
            setSelectedProject(null);
          }}
        >
          CLOSE
        </button>
      </div>
      <div
        ref={sliderRef}
        className={`flex h-full items-center justify-center w-[200vw] ${
          selectedProject ? "" : "gap-4 "
        }
        `}
      >
        {projects.map((item, index) => {
          const idx = index + 1;
          return (
            <div
              ref={(el) => {
                if (el) imageRefs.current[idx] = el;
              }}
              key={idx}
              onClick={() => {
                setSelectedProject(idx);
              }}
              className={`group flex-shrink-0 duration-1000 hover:grayscale-0 hover:brightness-90 ${
                selectedProject === idx
                  ? "grayscale-0 brightness-90"
                  : "grayscale brightness-75"
              }
            ${selectedProject ? "h-[50vh]" : "h-[40vh]"}
            ${selectedProject === idx ? "w-[40vw] mx-[10vw]" : "w-[5vw]"}
            ${
              selectedProject &&
              (selectedProject + 1 === idx || selectedProject - 1 === idx) &&
              "!w-[25vw]"
            }
            ${
              selectedProject &&
              selectedProject - 1 > idx &&
              "left-[200vw] absolute"
            }
            ${
              selectedProject &&
              selectedProject + 1 < idx &&
              "right-[200vw] absolute"
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
