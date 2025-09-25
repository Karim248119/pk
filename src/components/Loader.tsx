import React from "react";
import Typo from "./Typo";

export default function Loader() {
  return (
    <div className="w-full h-full flex flex-col gap-5 items-center justify-center relative">
      <div className="spinner mt-[40vh]">
        {Array(7)
          .fill(0)
          .map((_, index) => (
            <span key={index}></span>
          ))}
      </div>
      <Typo fixed className="uppercase">
        Loading
      </Typo>
    </div>
  );
}
