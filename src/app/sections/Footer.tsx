import React, { useState } from "react";
import Typo from "../components/Typo";
import Button from "../components/Button";
import Contacts from "../components/Contacts";
import { AnimatePresence } from "framer-motion";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <footer
        id="contact"
        className="bg-accent text-black h-screen w-full flex md:flex-row flex-col justify-center items-center overflow-hidden z-20 relative"
      >
        <div className="flex flex-col items-center md:w-[70vw] w-[90vw]">
          <Typo className="md:text-[10vw] text-[15vw] self-start">
            Let's start
          </Typo>
          <Typo sub className="md:text-[5vw] text-[10vw]">
            Something Great
          </Typo>
          <Typo className="md:text-[10vw] text-[15vw] self-end">Together</Typo>
        </div>
        <Button
          className=" md:w-[15vw] md:h-[15vw] w-[60vw] h-[60vw] md:mt-0 mt-8 md:text-base text-xs"
          onClick={() => setOpen(true)}
        >
          open contact form
        </Button>
      </footer>
      <AnimatePresence>
        {open && <Contacts setOpen={setOpen} />}
      </AnimatePresence>
    </>
  );
}
