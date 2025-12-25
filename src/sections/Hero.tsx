import React from "react";
import { HeroOuter } from "@/components/Hero/HeroOuter";
import HeroInner from "@/components/Hero/HeroInner";

export function Hero() {
  return (
    <div>
      <HeroInner>
        <HeroOuter />
      </HeroInner>
    </div>
  );
}
