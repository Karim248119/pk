"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { TfiClose } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";
import Typo from "./Typo";
import { Fonts } from "@/lib/fonts";
import { CONTACTS } from "../data/Contacts";
import IconButton from "./IconButton";

export default function Nav() {
  const links = [
    { text: "Home", href: "/" },
    { text: "About", href: "/#about" },
    { text: "Projects", href: "/#projects" },
    { text: "Courses", href: "/#courses" },
    { text: "Contact", href: "/#contact" },
  ];
  const sideLinks = [
    { text: "Home", href: "/" },
    { text: "About", href: "/#about" },
    { text: "Projects", href: "/projects" },
    { text: "Contact", href: "/#contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  // This state controls the visibility of the nav links section.
  const [showNavLinks, setShowNavLinks] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      // If the user scrolled up, show the links; if scrolled down, hide them.
      if (currentScrollY < prevScrollY.current) {
        setShowNavLinks(true);
      } else {
        setShowNavLinks(false);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Link href="/">
        <div className="text-accent mix-blend-difference fixed md:top-5 top-6 md:left-20 left-5 z-40">
          <div className={`md:text-4xl text-2xl ${Fonts.logo.className}`}>
            K
          </div>
        </div>
      </Link>
      <div className="flex gap-10 items-center fixed top-5 right-20 z-40 mix-blend-difference">
        <AnimatePresence>
          {showNavLinks && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex gap-10 items-center"
            >
              <div className="xl:flex gap-4 hidden">
                {links.map((link, index) => (
                  <a key={index} href={link.href} className="text-white">
                    {link.text}
                  </a>
                ))}
              </div>
              <div
                className={`w-[1px] bg-accent origin-center duration-[2s] ease-in-out hidden xl:block ${
                  isOpen ? "h-0" : "h-4"
                }`}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className="flex md:w-20 w-12 h-10 flex-col gap-2 overflow-hidden group md:relative fixed top-3 right-4 md:top-0 md:right-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-full h-[1px] bg-white absolute top-4 left-0 duration-500 group-hover:left-5" />
          <div className="w-full h-[1px] bg-white absolute bottom-4 left-0 duration-500 group-hover:-left-5" />
        </button>
      </div>
      <div
        className={`w-full h-screen bg-black fixed nav duration-500 ease-in-out z-1000 ${
          isOpen ? "top-0" : "top-full"
        }`}
      >
        <div className="w-full h-full flex md:flex-row flex-col relative">
          <button
            onClick={() => setIsOpen(false)}
            className="md:h-16 md:w-16 h-8 w-8 text-lg bg-accent text-black rounded-full flex justify-center items-center absolute top-5 md:right-20 right-5 hover:scale-90 duration-300 z-30"
          >
            <TfiClose />
          </button>

          <div className="flex gap-10 md:w-3/4 w-full md:h-full h-3/4 justify-center items-center md:flex-row flex-col ">
            <div className="flex flex-col gap-10 text-accent">
              {sideLinks.map((link, index) => (
                <div key={index} className="group">
                  <Link
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    href={link.href}
                    className="overflow-hidden flex gap-5 items-center"
                  >
                    <Typo fixed sub className="md:text-4xl text-2xl">
                      0{index + 1}.
                    </Typo>
                    <Typo fixed className="md:text-9xl text-4xl capitalize">
                      {link.text}
                    </Typo>
                  </Link>
                  <div className="w-0 h-[1px] group-hover:w-full bg-accent duration-700" />
                </div>
              ))}
            </div>
          </div>
          <div
            className={`md:w-[1px] h-[0.5px] bg-accent origin-center duration-[2s] ease-in-out m-auto ${
              isOpen ? "md:h-[90vh] w-[90vw]" : "md:h-0 w-0"
            }`}
          />
          <div className="relative flex md:w-1/4 w-full md:h-full h-1/4">
            <div className="absolute md:bottom-5 md:translate-y-0 left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 flex gap-5">
              {CONTACTS.slice(2, 5).map((item, index) => (
                <a target="_blank" href={item.href} key={index}>
                  <IconButton>{item.icon}</IconButton>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
