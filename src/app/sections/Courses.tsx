import React, { useState } from "react";
import Collapse from "@/components/Collapse";
import Typo from "@/components/Typo";
import { COURSES } from "@/data/Courses";
import { PiCertificate } from "react-icons/pi";
import {
  AiOutlineSafetyCertificate,
  AiTwotoneSafetyCertificate,
} from "react-icons/ai";
import { HiOutlineStatusOffline, HiOutlineStatusOnline } from "react-icons/hi";

export default function Courses() {
  return (
    <section
      id="courses"
      className="min-h-screen w-full bg-black relative z-20 md:p-20 py-10"
    >
      <div className="flex items-center justify-center md:mb-10 mb-5">
        <Typo className="text-[10vw] uppercase">Courses</Typo>
        <Typo sub className="text-[5vw]">
          & Certificates
        </Typo>
      </div>
      <div>
        {COURSES.map((course, index) => {
          const [isOpen, setisOpen] = useState(false);
          return (
            <Collapse
              key={index}
              num={index + 1}
              title={course.title}
              isOpen={isOpen}
              handleToggle={() => {
                setisOpen(!isOpen);
              }}
            >
              <div className=" flex md:flex-row flex-col justify-between md:text-base text-xs gap-10 p-5 text-accent/70">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-1">
                    <PiCertificate className="text-secondary md:text-xl text-lg" />
                    <p>{course.source}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <AiOutlineSafetyCertificate className="text-secondary md:text-xl text-lg" />
                    <p>{course.cer}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {course.type == "online" ? (
                      <HiOutlineStatusOnline className="text-secondary md:text-xl text-lg" />
                    ) : (
                      <HiOutlineStatusOffline className="text-secondary md:text-xl text-lg" />
                    )}
                    <p>{course.type}</p>
                  </div>
                  <div className="">{course.description}</div>
                </div>
                <img
                  src={course.link}
                  alt=""
                  className="md:w-[40vw] w-[90vw]"
                />
              </div>
            </Collapse>
          );
        })}
      </div>
    </section>
  );
}
