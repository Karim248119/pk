"use client";
import { projects } from "@/data/projects";
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "@/components/Logo";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (imagesLoaded === projects.length) {
      const timeout = setTimeout(() => setLoading(false), 400); // smooth fade
      return () => clearTimeout(timeout);
    }
  }, [imagesLoaded]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  return (
    <div className="relative overflow-hidden w-screen h-[100vh] text-primary py-32">
      {/* Loader overlay */}
      {true && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent" />
        </div>
      )}

      {/* Top bar */}
      <div className="absolute top-0 left-0 w-full h-20 flex items-center justify-between px-20 z-10">
        <Logo />
        <button onClick={() => setSelectedProject(null)}>CLOSE</button>
      </div>

      {/* Images */}
      <div
        className={`flex h-full items-center select-none justify-center overflow-hidden transition-opacity duration-700 ${
          selectedProject ? "" : "gap-4 px-10"
        } ${loading ? "opacity-0" : "opacity-100"}`}
      >
        {projects.map((item, index) => {
          const idx = index + 1;
          return (
            <div
              key={idx}
              onClick={() => setSelectedProject(idx)}
              className={`relative group duration-700 ${
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
                onLoad={handleImageLoad}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
