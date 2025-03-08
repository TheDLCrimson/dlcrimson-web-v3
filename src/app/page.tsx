"use client";

import React, { useState, useEffect } from "react";
import Particles from "@/components/layout/particles";
import TitleColorChange from "@/components/layout/title-color-change";
// import NavigationMenu from "@/components/layout/nav-menu";

export default function Home() {
  const [darkMode, setdarkMode] = useState(true);

  useEffect(() => {
    const rand = Math.random();
    setdarkMode(rand >= 0.42);
  }, []);

  const toggleBackground = () => {
    setdarkMode((prev) => !prev);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center w-screen h-screen overflow-hidden ${
        darkMode
          ? "bg-gradient-to-tl from-black via-zinc-600/20 to-black"
          : "bg-gradient-to-tl from-white via-[#DEE4EA] to-white"
      }`}
    >
      {/* Updated glow line with custom-fade-left */}
      <div className="hidden w-screen h-px animate-glow md:block animate-custom-fade-left bg-gradient-to-r from-[#a30000]/0 via-[#a30000]/80 to-[#a30000]/20" />

      {/* Particles with custom-fade-in animation */}
      <Particles
        className="absolute inset-0 z-0 animate-custom-fade-in pointer-events-none"
        quantity={1114}
      />

      {/* Title Color Change */}
      <TitleColorChange
        title={"DLCrimson"}
        hoverColor="hover:text-[#a30000]/70"
        colorText="text-[#a30000]/70"
        darkMode={darkMode}
        invertColor={true}
      />

      {/* Updated glow line with custom-fade-right */}
      <div className="hidden w-screen h-px animate-glow md:block animate-custom-fade-right bg-gradient-to-l from-[#a30000]/0 via-[#a30000]/80 to-[#a30000]/20" />

      {/* Text Section with custom-fade-in animation */}
      <div className="text-center animate-custom-fade-in my-6">
        <h2 className="text-sm text-zinc-500">
          An ordinary person who executes with passion and determination
        </h2>
        <h2
          onClick={toggleBackground}
          className="cursor-pointer text-sm text-red-800 font-calsans transition-all duration-2000 animate-pulse"
        >
          A fallen gifted
        </h2>
      </div>
    </div>
  );
}
