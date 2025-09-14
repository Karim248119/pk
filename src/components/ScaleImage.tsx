"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScaleImage = ({ src, className }: { src: string; className: string }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const animation = gsap.to(imgRef.current, {
      scale: 1.5,
      ease: "none",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Cleanup the scrollTrigger instance when the component unmounts
    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
    };
  }, []);

  return <img ref={imgRef} src={src} alt="..." className={className} />;
};

export default ScaleImage;
