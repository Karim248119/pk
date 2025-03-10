import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "@/hooks/useInView";

type SpreadImgsProps = {
  IMGS: string[];
};

export default function SpreadImgs({ IMGS }: SpreadImgsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const isInView = useInView(
    containerRef as React.RefObject<Element>,
    isMobile ? 0.2 : 0.3
  );

  const moveToLeft = {
    initial: { x: "100%" },
    exit: { x: "-100%" },
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      type: "keyframes",
    },
  };
  const moveToRight = {
    initial: { x: "-100%" },
    exit: { x: "100%" },
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      type: "keyframes",
    },
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex justify-center items-center relative overflow-x-hidden"
    >
      <motion.img
        {...moveToLeft}
        animate={isInView && { x: "40%" }}
        src={IMGS[0]}
        alt="..."
        className="h-auto w-[10vw] "
      />
      <motion.img
        {...moveToLeft}
        animate={isInView && { x: "20%" }}
        src={IMGS[1]}
        alt="..."
        className="h-auto md:w-[12vw] w-[40vw] z-10"
      />
      <motion.img
        src={IMGS[2]}
        alt="..."
        className="h-auto md:w-[14vw] w-[50vw] z-20"
      />
      <motion.img
        {...moveToRight}
        animate={isInView && { x: "-20%" }}
        src={IMGS[3]}
        alt="..."
        className="h-auto md:w-[12vw] w-[40vw] z-10"
      />
      <motion.img
        {...moveToRight}
        animate={isInView && { x: "-40%" }}
        src={IMGS[4]}
        alt="..."
        className="h-auto w-[10vw] "
      />
    </div>
  );
}
