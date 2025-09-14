"use client";
import ScaleImage from "@/components/ScaleImage";
import Nav from "@/components/Nav";
import Typo from "@/components/Typo";
import { WORKS } from "@/data/projects";
import { useParams } from "next/navigation";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursorWrapper from "@/components/CustomCursor";
import Link from "next/link";
import { PiCirclesFourFill } from "react-icons/pi";
import SpreadImgs from "@/components/SpreadImgs";
import { BsApple, BsGooglePlay } from "react-icons/bs";
import Lenis from "lenis";
gsap.registerPlugin(ScrollTrigger);

export default function page() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  const conRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Animate the text container to scroll slower (parallax effect)
    gsap.to(imgRef.current, {
      yPercent: -70, // Adjust this value for the desired parallax speed
      ease: "none",
      scrollTrigger: {
        trigger: conRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true, // Syncs the animation with the scrollbar position
      },
    });
  }, []);

  const { id } = useParams();
  const projectId = Number(id);
  const project = WORKS[projectId - 1];
  const nextProjectId = projectId === 3 ? 1 : projectId + 1;
  const nextProject = WORKS[nextProjectId - 1];
  return (
    <div>
      <Nav />
      <div className="md:h-screen h-[50vh] w-full md:grid grid-cols-2">
        <div className="w-full h-full bg-accent text-black flex justify-center items-center">
          <div className="flex flex-col items-end ">
            <Typo fixed className="md:text-[7vw] text-[15vw] uppercase">
              {project.title}
            </Typo>
            <Typo fixed sub className="md:text-[3vw] text-[8vw] -mt-[3vw]">
              {project.sub}
            </Typo>
          </div>
        </div>
        <div className="w-full h-full overflow-hidden md:block hidden">
          <ScaleImage
            src={project.img}
            className="h-full w-full object-cover brightness-75"
          />
        </div>
      </div>
      <div
        className="w-full h-[120vh] bg-accent flex items-center justify-center relative"
        ref={conRef}
      >
        <img src="/w/bg.jpg" alt="..." className="w-full h-full" />
        <img
          src={project?.wImg}
          alt="..."
          ref={imgRef}
          className="md:h-[66vh] md:w-[50vw] w-[90vw] object-cover center object-top -mt[10vh]"
        />
      </div>
      <div className="h-[100vh] w-full bg-accent flex flex-col relative items-center">
        <div className="md:h-[30vh] h-[4 0vh] w-[80vw] bg-black -mt-[15vh] relative z-10 flex md:flex-row flex-col md:text-base text-xs md:justify-around md:items-center p-10 gap-5">
          <div>
            <h3 className="text-accent/60 font-semibold">Website</h3>
            <p className="text-accent/90 font-semibold">{project.web}</p>
          </div>
          <div>
            <h3 className="text-accent/60 font-semibold">Mobile App</h3>
            <p className="text-accent/90 font-semibold">{project.mob}</p>
          </div>
          <div>
            <h3 className="text-accent/60 font-semibold">Back-end</h3>
            <p className="text-accent/90 font-semibold">{project.back}</p>
          </div>
        </div>
        <div className="flex-1 flex md:flex-row flex-col w-full justify-center items-center text-black gap-10 -mt-[20vh]">
          <Typo sub fixed className="text-4xl ">
            About
          </Typo>
          <p className="md:w-[30vw] w-[90vw] md:text-xl text-sm">
            {project.des}
          </p>
        </div>
        <div className="h-[40vh] w-[40vh] border border-black/20 rounded-full absolute -bottom-[20vh]" />
      </div>
      <div className="w-full h-[120vh] bg-accent flex items-center justify-center relative">
        <img
          src="/w/bg3.jpg"
          alt="..."
          className="w-full h-full object-cover center z-0"
        />
        <div className="h-full w-full relative  z-20">
          <a target="_blank" href={project.link}>
            <div className="bg-black tracking-widest z-20 text-accent text-sm font-semibold w-[30vh] aspect-square rounded-full absolute top-0 left-1/2 -translate-x-1/2 flex justify-center items-center -mt-[15vh] hover:-mt-[20vh] hover:w-[40vh] duration-300 ease-in">
              VIEW LIFE SITE
            </div>
          </a>
          <SpreadImgs IMGS={project.mImgs} />
          {project.googlePlay && (
            <div className="flex md:flex-row flex-col text-nowrap items-center absolute bottom-14 left-1/2 -translate-x-1/2 gap-4">
              <a
                href={project.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="flex md:w-auto w-[70vw] md:text-balance text-sm group items-center justify-center glass py-2 px-4 text-black hover:text-white rounded-full hover:bg-black duration-500 transition"
              >
                <BsGooglePlay className="text-black group-hover:text-secondary mr-2 duration-500" />
                <span>Download from Google Play</span>
              </a>
              <a
                href={project.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex md:w-auto w-[70vw] md:text-balance text-sm group items-center justify-center glass  py-2 px-4 text-black hover:text-white rounded-full hover:bg-black duration-500 transition"
              >
                <BsApple className="text-black group-hover:text-secondary mr-2 duration-500" />
                <span>Download from App Store</span>
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="h-screen w-full relative">
        <Link href={`/projects/${nextProjectId}`}>
          <CustomCursorWrapper
            className="group"
            customCursorContent={
              <div className="w-28 h-28 rounded-full flex justify-center items-center overflow-hidden">
                <div className="center glass relative filter w-full h-full rounded-full"></div>
                <p className="center">view</p>
              </div>
            }
          >
            <div className="h-screen w-full relative">
              <ScaleImage
                src={nextProject.img}
                className="fixed w-full h-full top-0 bottom-0 -z-10 object-cover brightness-50"
              />
              <div className="flex flex-col items-end center z-20">
                <p className="md:text-lg text-accent/70 self-center">
                  Next project
                </p>
                <Typo fixed className="md:text-[7vw] text-[15vw] uppercase">
                  {nextProject.title}
                </Typo>
                <Typo fixed sub className="md:text-[5vw] text-[10vw] -mt-[2vw]">
                  {nextProject.sub}
                </Typo>
              </div>
            </div>
          </CustomCursorWrapper>
        </Link>
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
      </div>
    </div>
  );
}
