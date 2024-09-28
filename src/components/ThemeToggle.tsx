"use client";
import React, { ContextType, useContext } from "react";

import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      className={
        "flex items-center justify-between bg-slate-500 rounded-[50px] cursor-pointer w-16 h-8 relative right-1" +
        `${theme === "dark" ? "left-1 bg-white" : "right-1 bg-[#0f172a]"}`
      }
      onClick={toggle}
    >
      <Image src="/assets/moon.png" alt="moon" width={20} height={20} />
      <div
        className={
          "absolute w-6 h-6 rounded-[50%] " +
          `${theme === "dark" ? "left-1 bg-[#0f172a]" : "right-1 bg-white"}`
        }
      ></div>
      <Image src="/assets/sun.png" alt="sun" width={24} height={24} />
    </div>
  );
}

export default ThemeToggle;
