import React from "react";

export default function IconButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="md:w-14 w-10 aspect-square md:text-xl bg-accent text-black rounded-full flex justify-center items-center   hover:scale-90 duration-300"
    >
      {children}
    </button>
  );
}
