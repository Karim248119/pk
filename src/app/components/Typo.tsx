"use client";
import { Fonts } from "@/lib/fonts";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Typo({
  children,
  className,
  sub,
  fixed,
}: {
  children: React.ReactNode;
  className?: string;
  sub?: boolean;
  fixed?: boolean;
}) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // Set the element to be hidden initially
    gsap.set(el, { opacity: 0 });

    ScrollTrigger.create({
      trigger: el,
      start: "top bottom", // when the element's top reaches the bottom of the viewport
      onEnter: () => {
        // When scrolling down, animate in from below
        gsap.fromTo(
          el,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
        );
      },
      onEnterBack: () => {
        // When scrolling up, animate in from above
        gsap.fromTo(
          el,
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
        );
      },
      // Optional: adjust end or other callbacks if needed
    });
  }, []);

  return (
    <div
      ref={fixed ? null : elRef}
      style={{ opacity: fixed ? 1 : 0 }} // Ensures it starts hidden
      className={` ${
        sub ? Fonts.fancy.className : Fonts.nueueBold.className
      } ${className}`}
    >
      {children}
    </div>
  );
}
