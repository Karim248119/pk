import Image, { StaticImageData } from "next/image";
import React from "react";

export default function FlipImg({
  className,
  src1,
  src2,
}: {
  className?: string;
  src1: StaticImageData;
  src2: StaticImageData;
}) {
  return (
    <div className={`relative group overflow-hidden ${className}`}>
      <Image
        alt="mod"
        src={src1}
        className=" w-full h-full object-cover  overflow-hidden "
      />
      <Image
        alt="item"
        src={src2}
        className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden  group-hover:scale-125 z-10 opacity-0 group-hover:opacity-100 duration-200"
      />
    </div>
  );
}
