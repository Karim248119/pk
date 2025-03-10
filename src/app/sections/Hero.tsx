import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typo from "../components/Typo";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animate the text container to scroll slower (parallax effect)
    gsap.to(textRef.current, {
      yPercent: -100, // Adjust this value for the desired parallax speed
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true, // Syncs the animation with the scrollbar position
      },
    });
  }, []);

  return (
    <div ref={heroRef} className="h-screen w-full relative">
      <img
        src="/home2.jpg"
        className="absolute top-0 left-0 w-screen h-screen object-cover -z-10 brightness-50"
        alt="Background"
      />
      <div
        ref={textRef}
        className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center flex-col gap-28"
      >
        <div className="flex flex-col items-end">
          <Typo className="md:text-[15vw] text-[25vw]">KARIM</Typo>
          <Typo sub className="md:text-[5vw] text-[10vw] -mt-[5vw]">
            Hassan
          </Typo>
        </div>
        <p className="md:text-lg">Web & Mobile React developer</p>
      </div>
    </div>
  );
}
