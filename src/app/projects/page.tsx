"use client";

import { useState } from "react";
import { projects } from "../data/projects";
import Typo from "../components/Typo";
import { FaCircle } from "react-icons/fa6";
import Nav from "../components/Nav";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { CONTACTS } from "../data/Contacts";

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedProject = selectedIndex ? projects[selectedIndex - 1] : null;

  const colors = {
    background: selectedProject?.bgColor || "",
    text: selectedProject?.txtColor || "",
  };

  const Skill = ({ type, skill }: { type: string; skill?: string }) => (
    <div className="flex items-center text-[10px] duration-1000">
      <Typo
        base
        hidden
        duration={1}
        className="md:mr-10 w-20 flex items-center"
      >
        <FaCircle className="text-[5px] mr-2" />
        {type}
      </Typo>
      <Typo base hidden duration={1} className="">
        {skill || (
          <div className="w-20 h-[1px] bg-current transition-colors duration-1000 " />
        )}
      </Typo>
    </div>
  );

  const getProjectClasses = (idx: number) => {
    const isActive = selectedIndex === idx;
    const isNeighbor =
      selectedIndex && (selectedIndex + 1 === idx || selectedIndex - 1 === idx);

    return [
      "group absolute md:top-1/2 top-[45vh] -translate-y-1/2 brightness-75 hover:grayscale-0 hover:brightness-90 duration-500",
      isActive ? "grayscale-0" : "grayscale ",
      selectedIndex ? "md:h-[55vh] h-[30vh] md:w-[20vw] w-[10vw]" : "h-[40vh]",
      isActive && "md:!w-[40vw] !w-[70vw] !left-1/2 -translate-x-1/2",
      isNeighbor && "opacity-25",
      selectedIndex &&
        selectedIndex + 1 === idx &&
        "md:!left-[80vw] !left-[90vw]",
      selectedIndex && selectedIndex - 1 === idx && "!left-0",
      selectedIndex && selectedIndex - 1 > idx && "!-left-[120vw]",
      selectedIndex && selectedIndex + 1 < idx && "!left-[120vw]",
    ]
      .filter(Boolean)
      .join(" ");
  };

  return (
    <div
      className="relative overflow-hidden w-screen h-[100vh] py-32 duration-1000 bg-dark text-accent"
      style={{
        background: colors.background,
        color: colors.text,
      }}
    >
      {/* Navigation */}
      <div className="flex gap-2 absolute md:top-8 top-[18vh] left-1/2 -translate-x-1/2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i + 1)}
            className={`border w-0 h-3 opacity-50 hover:opacity-100 duration-500 ${
              selectedIndex === i + 1 ? "opacity-100 w-6" : ""
            }`}
            style={{ borderColor: colors.text }}
          />
        ))}
      </div>

      <Nav className="!mix-blend-normal" hideNavLinks />
      {/* Project Gallery */}
      <div
        className={`flex h-full items-center justify-center select-none overflow-hidden ${
          selectedIndex ? "" : "gap-4"
        }`}
      >
        {projects.map((item, i) => {
          const idx = i + 1;
          return (
            <div
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              style={{
                width: selectedIndex ? "" : `${85 / projects.length}vw`,
                left: `${i * (90 / projects.length) + 5}vw`,
              }}
              className={getProjectClasses(idx)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* Project Details */}
      {selectedProject && (
        <div className="absolute md:top-1/2 top-[45vh] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-50 pointer-events-none">
          <Typo
            key={selectedIndex}
            hidden
            className="md:text-[10vw] text-[10vw]  uppercase tracking-[0.2em] leading-none text-center"
          >
            {selectedProject.title}
          </Typo>
        </div>
      )}
      {selectedProject && (
        <div
          key={selectedIndex}
          className="absolute left-0 bottom-0 md:px-20 px-5 py-10 z-50 w-full grid md:grid-cols-3 md:grid-rows-1 grid-rows-3 text-xs gap-3 items-end md:items-start"
        >
          <Typo base hidden duration={1} className="tracking-wider">
            {selectedProject.type === "both"
              ? "WEBSITE & MOBILE APP"
              : selectedProject.type === "web"
              ? "WEBSITE"
              : "MOBILE APP"}
          </Typo>

          <div className="md:justify-self-center">
            <Skill type="FRONT-END" skill={selectedProject.front} />
            <Skill type="BACK-END" skill={selectedProject.back} />
            <Skill type="MOBILE" skill={selectedProject.mobile} />
          </div>

          <div className="justify-self-end space-y-1 uppercase text-[10px]">
            {selectedProject.link && (
              <a href={selectedProject.link} target="_blank" className="group">
                <Typo
                  base
                  hidden
                  duration={1}
                  className="flex items-center gap-1"
                >
                  CHECK <HiOutlineArrowUpRight />
                </Typo>
                <div className="h-[1px] bg-current w-0 group-hover:w-full duration-500" />
              </a>
            )}
            <button onClick={() => setSelectedIndex(null)} className=" group">
              <Typo
                base
                hidden
                duration={1}
                className="flex items-center gap-1"
              >
                CLOSE <AiOutlineClose />
              </Typo>
              <div className="h-[0.5px] bg-current w-0 group-hover:w-full duration-500" />
            </button>
          </div>
        </div>
      )}

      {selectedIndex === null && (
        <div className="absolute bottom-5 right-5 md:bottom-10 md:right-20 flex flex-col text-xs">
          {CONTACTS.slice(2).map((item, i) => (
            <a href={item.href} target="_blank" key={i}>
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
