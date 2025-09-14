import React from "react";
import HorizontalSlider from "@/components/HrizontalSwiper";
import Typo from "@/components/Typo";

export default function Skills() {
  return (
    <div className="bg-accent">
      {/* <div className=" w-full h-[30vh] text-black text-4xl flex justify-center items-center z-20">
        <Typo fixed sub className="text-[4vw]">
          My
        </Typo>
        <Typo fixed className="text-[8vw] uppercase">
          Skills
        </Typo>
      </div> */}
      <HorizontalSlider />
    </div>
  );
}
