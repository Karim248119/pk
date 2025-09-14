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
      className="md:w-12 w-8 aspect-square md:text-lg text-sm bg-accent text-black rounded-full flex justify-center items-center   hover:scale-90 duration-300"
    >
      {children}
    </button>
  );
}
