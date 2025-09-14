import React, { ReactNode } from "react";
import Typo from "./Typo";

export default function ButtonLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} target="_blank" className=" group w-fit">
      <Typo base hidden duration={1} className="flex items-center gap-1">
        {children}
      </Typo>
      <div className="h-[0.5px] bg-current w-0 group-hover:w-full duration-500" />
    </a>
  );
}
