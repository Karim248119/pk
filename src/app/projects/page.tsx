"use client";

import { Suspense, useState } from "react";
import Projects from "@/components/Projects";
import Loader from "@/components/Loader";

export default function page() {
  return (
    <Suspense fallback={<Loader />}>
      <Projects />
    </Suspense>
  );
}
