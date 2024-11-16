"use client";

import { BentoGridProjects } from "@/components/layout/bentoGrid";
import React from "react";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div
      className={`flex flex-col items-center justify-center w-screen h-screen overflow-hidden `}
    >
        <BentoGridProjects />
    </div>
  );
}
