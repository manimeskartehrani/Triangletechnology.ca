// app/page.tsx

import React from "react";
import HeroText from "@/components/Hero/HeroText";
import HeroTshape from "@/components/Hero/HeroTshape";
import { HeroRingsWrapper } from "./HeroRingsWrapper";

export function HeroOuter() {
  return (
    <>
      {/* “T” shape (can also be moved into a client component) */}
      <HeroTshape />

      {/* Defer heavy rotations */}
      <HeroRingsWrapper />

      {/* Server‑rendered text: shows up in HTML for immediate paint */}
      <HeroText />
    </>
  );
}
