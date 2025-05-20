import React from "react";
import { motion } from "framer-motion";
import { TfiClose } from "react-icons/tfi";
import Typo from "./Typo";
import IconButton from "./IconButton";
import { CONTACTS } from "../data/Contacts";
import ContactForm from "./ContactForm";

const rise = {
  initial: { y: "100%" },
  animate: { y: 0 },
  exit: { y: "100%" },
  transition: {
    duration: 1,
    ease: "easeInOut",
    damping: 20,
    type: "keyframes",
  },
};
const fall = {
  initial: { y: "-100%" },
  animate: { y: 0 },
  exit: { y: "-100%" },
  transition: {
    duration: 1,
    ease: "easeInOut",
    damping: 20,
    type: "keyframes",
  },
};

export default function Contacts({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <motion.div className="fixed top-0 left-0 right-0 bottom-0 bg-black/30 md:p-10 p-3 z-1000">
      <div className="w-full h-full grid md:grid-cols-2 md:grid-rows-1 grid-rows-5 overflow-hidden z-50 relative ">
        <motion.div
          {...fall}
          className="flex-1 bg-black text-accent flex flex-col items-center justify-center z-50 row-span-4"
        >
          <div className="flex flex-col items-end">
            <Typo className="md:text-[6vw] text-[14vw] uppercase">Get In</Typo>
            <Typo sub className="md:text-[4vw] text-[8vw] -mt-[2vw]">
              Touch
            </Typo>
          </div>
          <ContactForm />
        </motion.div>
        <motion.div
          {...rise}
          className="flex-1 relative overflow-hidden  row-span-1"
        >
          <img
            src="/c.jpg"
            alt="..."
            className="absolute left-0 top-1/2 -translate-y-1/2 brightness-50"
          />
          <div className="w-full h-full bg-black/20 absolute top-0 left-0" />
          <div className=" absolute md:bottom-5 md:translate-y-0 left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 flex gap-5">
            {CONTACTS.slice(0, 3).map((item, index) => (
              <a target="_blank" href={item.href} key={index}>
                <IconButton>{item.icon}</IconButton>
              </a>
            ))}
          </div>
        </motion.div>
        <button
          onClick={() => setOpen(false)}
          className="md:w-14 w-10 aspect-square z-50 md:text-lg md:bg-black md:text-accent bg-accent text-black rounded-full flex justify-center items-center absolute right-5 top-8 hover:scale-90 duration-300"
        >
          <TfiClose />
        </button>
      </div>
    </motion.div>
  );
}
