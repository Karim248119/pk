import { Fonts } from "@/lib/fonts";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className={`md:text-4xl text-2xl ${Fonts.logo.className}`}>K</div>
  );
}
