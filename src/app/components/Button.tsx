import React from "react";

export default function Button({
  children,
  className,
  onClick,
  secondary,
  type,
  ...props
}: {
  onClick?: () => void;
  className?: string;
  secondary?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={` relative  md:text-base text-sm  rounded-full flex justify-center items-center duration-500 group ${className} ${
        secondary
          ? "text-accent hover:text-black"
          : "text-black hover:text-secondary"
      }`}
      {...props}
    >
      <div
        className={`w-full h-full scale-0 absolute top-0 left-0 rounded-full group-hover:scale-100 duration-500 z-10 ${
          secondary ? "bg-accent" : "bg-black"
        }`}
      />
      <div
        className={`w-full h-full absolute top-0 left-0 rounded-full group-hover:scale-0  duration-500 z-10 ${
          secondary ? "border-accent  border" : "border-black border-2"
        }`}
      />
      <p className=" uppercase z-20 tracking-widest">{children}</p>
    </button>
  );
}
