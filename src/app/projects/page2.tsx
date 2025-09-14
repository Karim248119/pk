"use client";
import React from "react";
import Typo from "../components/Typo";
import { projects } from "../data/projects";
import Nav from "../components/Nav";
import { MdOutlineWebhook } from "react-icons/md";
import { PiCirclesThreeFill } from "react-icons/pi";
import { GiSheikahEye } from "react-icons/gi";

const ProjectCard = ({
  project,
  filter,
  index,
}: {
  project: {
    title: string;
    des: string;
    img: string;
    link: string;
    type: string;
    iconLists: string[];
    detailed?: boolean;
  };
  filter: string;
  index: number;
}) => {
  return (
    <>
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 duration-300"
      />
      <div className="w-full h-full absolute top-0 p-5 px-10 text-accent bg-black/60 flex flex-col justify-between opacity-0 group-hover:opacity-100 delay-300">
        <div className=" space-y-2">
          <Typo sub fixed className="text-2xl">
            0{index + 1}.
          </Typo>
          <Typo fixed className="text-4xl">
            {project.title}
          </Typo>
        </div>
        <div className="flex">
          {project.iconLists.map((tech, index) => (
            <div
              key={index}
              className="h-10 w-10 rounded-full border  bg-black border-accent  duration-300  -ml-2 flex justify-center items-center z-20"
            >
              <img src={tech} alt="..." className="h-5 w-5 " />
            </div>
          ))}
        </div>
        {project.link &&
          (!project.detailed ? (
            <a target="_blank" href={project.link}>
              <button className="group/link -mb-8">
                <div className=" uppercase flex items-center gap-1 text-accent text-xs font-semibold tracking-widest">
                  <GiSheikahEye className="group-hover/link:rotate-18 text-base" />
                  View live site
                </div>
                <div className="h-[0.5px] w-0 bg-accent group-hover/link:w-full duration-500" />
              </button>
            </a>
          ) : (
            <a href={project.link}>
              <button className="group/link -mb-8">
                <div className=" uppercase flex items-center gap-1 text-accent text-xs font-semibold tracking-widest">
                  <PiCirclesThreeFill className="group-hover/link:rotate-90 duration-500 text-base" />
                  More Details
                </div>
                <div className="h-[0.5px] w-0 bg-accent group-hover/link:w-full duration-500" />
              </button>
            </a>
          ))}
      </div>
      <div
        className={`w-full h-full bg-black absolute duration-500 z-30 ${
          project.type == "both" || filter == "all" || project.type == filter
            ? "top-full"
            : "top-0"
        }`}
      ></div>
    </>
  );
};

export default function page() {
  const [filter, setFilter] = React.useState("all");
  const tabs = [
    {
      title: "All",
      value: "all",
    },
    {
      title: "Websites",
      value: "web",
    },
    {
      title: "Apps",
      value: "app",
    },
  ];
  return (
    <div className="w-full min-h-screen">
      <div className="md:h-20 h-10 w-full">
        <Nav />
      </div>
      <div className="w-full flex justify-center items-center md:gap-12 gap-5 md:py-10 py-5">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setFilter(tab.value)}
            className=" relative"
          >
            <Typo fixed sub className="md:text-4xl text-xl text-accent">
              {tab.title}
            </Typo>
            <div
              className={`h-[0.5px] absolute bg-accent top-1/2 -translate-y-1/2 duration-700 ${
                filter == tab.value ? "w-full" : "w-0"
              }`}
            />
          </button>
        ))}
      </div>
      <div className="flex flex-wrap ">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className={`md:w-1/4 w-full h-64 relative flex border-2 border-black overflow-hidden cursor-pointer group`}
            >
              <ProjectCard project={project} filter={filter} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
