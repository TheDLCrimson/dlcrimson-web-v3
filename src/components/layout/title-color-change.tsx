"use client";

import { useState } from "react";
import Link from "next/link";

export default function TitleColorChange({
  title = "Title",
  hoverColor = "hover:text-[#123456]/70",
  colorText = "text-[#123456]/70",
  darkMode = true,
  invertColor = true
}) {
  const [clicked, setClicked] = useState(new Array(title.length).fill(false));
  const [pass, setPass] = useState(new Array());
  const [reveal, setReveal] = useState("");
  const password = [4, 5, 0, 1, 2];

  const handleClick = (index: number) => {
    const newClicked = [...clicked];
    newClicked[index] = !newClicked[index];
    setClicked(newClicked);

    if (title == "DLCrimson") {
      let newPass = pass;
      if (newClicked[index]) newPass.push(index);
      else newPass = newPass.filter((e) => e !== index);
      setPass(newPass);

      revealSecret();
    }
  };

  const revealSecret = () => {
    if (JSON.stringify(pass) == JSON.stringify(password))
      setReveal(`Noice! You found me`);
  };

  let checkClick = false;
  clicked.forEach((e) => {
    if (e === true) checkClick = true;
  });

  let colorOne: string, colorTwo: string;
  let hoverColorBG: string;

  if (darkMode) {
    colorOne = "bg-black/5";
    colorTwo = "bg-white/95";
    hoverColorBG = invertColor ? "hover:bg-black/10" : "";
  } else {
    colorOne = "bg-white/5";
    colorTwo = "bg-black/95";
    hoverColorBG = invertColor ? "hover:bg-white/10" : "";
  }

  return (
    <>
      <h1
        className={`z-10 text-4xl transition-all text-transparent duration-1000 cursor-default text-edge-outline 
        animate-custom-title font-ethno sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text ${hoverColorBG} ${
          checkClick ? colorOne : colorTwo
        }`}
      >
        {title.split("").map((char, index) => (
          <span
            key={index}
            className={`cursor-pointer ${hoverColor} transition-colors duration-500 ${
              clicked[index] ? colorText : "hover:animate-pulse"
            }`}
            onClick={() => handleClick(index)}
          >
            {char}
          </span>
        ))}
      </h1>
      <Link
        href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
        rel="noopener noreferrer"
        target="_blank"
        className="text-sm text-red-800 font-calsans transition-all cursor-pointer"
      >
        {reveal}
      </Link>
    </>
  );
}
