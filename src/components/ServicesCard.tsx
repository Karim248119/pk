"use client";
import React from "react";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import MotionProvider from "./MotionProvider";
import { FaCaretDown, FaCircle } from "react-icons/fa6";
import { RxTriangleDown } from "react-icons/rx";
export default function ServicesCard({
  id,
  icon,
  title,
  description,
}: {
  id?: string;
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <MotionProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 2, ease: "easeIn" }}
        className=" cursor-pointer relative flex flex-col text-center group border-accent/50 border p-4 transition-all ease-in-out duration-500 text-accent"
      >
        <div className="h-0 overflow-hidden text-sm bg-accent text-black text-background px-2 flex justify-center items-center lg:group-hover:h-[30vh] group-hover:h-[30vh] duration-700 transition-all ease-in-out">
          {description}
        </div>
        <div className="flex h-[30vh] flex-col justify-evenly items-center gap-5 group-hover:h-0 overflow-hidden duration-700 transition-all ease-in-out">
          <span className="group-hover:text-accent transition-all ease-in-out duration-300">
            <RxTriangleDown size={20} />
          </span>
          <div className="text-6xl text-accent">{icon}</div>
          <span className="">.</span>
        </div>
        <div className="flex flex-col my-5 gap-5">
          <h2 className="font-semibold uppercase">{title}</h2>
          <p className=" text-accent/50 group-hover:text-secondary font-semibold">
            {id}
          </p>
        </div>
        <div className="h-[2px] w-1/6 bg-accent/50 absolute left-1/2 -translate-x-1/2 -bottom-[1px] group-hover:w-1/3 group-hover:bg-secondary duration-500" />
      </motion.div>
    </MotionProvider>
  );
}
