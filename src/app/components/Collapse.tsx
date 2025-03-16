import React, { useEffect, useRef, useState } from "react";
import Typo from "./Typo";

export default function Collapse({
  num,
  title,
  children,
  isOpen,
  handleToggle,
}: {
  num: number;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  handleToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && ref.current) {
      setHeight(`${ref.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);
  return (
    <div className=" border-y border-accent/20 group">
      <button
        onClick={handleToggle}
        className="w-full flex justify-between gap-2 items-center md:py-10 px-2 md:h-auto h-20"
      >
        <div className="flex items-center gap-3">
          <Typo sub fixed className="md:text-4xl">
            {num < 10 && "0"}
            {num}.
          </Typo>
          <Typo
            fixed
            className={`capitalize md:text-5xl  ${
              !isOpen && "text-outline text-transparent"
            }`}
          >
            {title}
          </Typo>
        </div>
        <div className=" relative md:w-8 w-5 aspect-square flex justify-center items-center">
          <div
            className={`w-8 h-[0.5px] bg-accent duration-500 ${
              !isOpen && "rotate-90"
            }`}
          />
          <div className="w-full h-[0.5px] bg-accent center" />
        </div>
      </button>
      <div style={{ height }} className={`overflow-hidden duration-500 `}>
        <div ref={ref}> {children}</div>
      </div>
      <div className="w-0 h-[1px] bg-accent group-hover:w-full duration-700" />
    </div>
  );
}
