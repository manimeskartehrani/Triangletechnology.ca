"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import starBg from "@/assets/stars.png";
import { useRef } from "react";

const HeroInner = ({ children }: { children: React.ReactNode }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative mask-gradient"
      style={{
        backgroundImage: `url(${starBg.src})`,
        backgroundPositionY,
      }}
      animate={{ backgroundPositionX: starBg.width }}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
    >
      {/* Gradient overlay & mask paint immediately */}
      <div className="absolute inset-0 background-gradient" />
      {children}
    </motion.section>
  );
};

export default HeroInner;
