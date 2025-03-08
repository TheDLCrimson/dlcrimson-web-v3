"use client";

import React from "react";
import FounderMatching from "@/components/projects/FounderMatching.mdx";


export default function Projects() {
  return (
    <div
      className={`flex flex-col items-center justify-center w-screen h-screen overflow-hidden `}
    >
      <FounderMatching />
    </div>
  );
}
