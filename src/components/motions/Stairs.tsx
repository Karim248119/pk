import React from "react";
import { animate, AnimatePresence, motion } from "framer-motion";
export default function Stairs() {
  const reverseIndex = (index: any) => {
    const totalSteps = 3;
    return totalSteps - index - 1;
  };
  const animation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] },
  };
  return (
    <>
      {[...Array(3)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.5 * (index + 1),
              ease: "easeInOut",
              delay: reverseIndex(index + 1) * 0.5,
            }}
            className={` h-full w-full absolute ${
              index === 0
                ? "bg-accent"
                : index === 1
                ? "bg-secondary"
                : "bg-dark"
            }`}
          />
        );
      })}
    </>
  );
}
