// app/page.tsx
import dynamic from "next/dynamic";
import Button from "@/components/Button";
import starBg from "@/assets/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroTshape from "@/components/HeroTshape";

const HeroRings = dynamic(() => import("@/components/HeroRings"), {
  ssr: false,
});

export function Hero() {
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
      <div className="absolute inset-0 background-gradient " />

      {/* “T” shape (can also be moved into a client component) */}
      <HeroTshape />
      {/* Defer heavy rotations */}
      <HeroRings />

      {/* Server‑rendered text: shows up in HTML for immediate paint */}
      <div className="container font-heading relative mt-10 md:mt-44">
        <h1 className="text-[90px] font-semibold tracking-tighter text-gradient bg-clip-text text-center md:text-[160px] md:leading-none">
          Triangle
        </h1>
        <p className="text-lg font-body md:text-xl text-white/70 mt-2 md:mt-5 text-center mx-auto">
          Elevate your site’s visibility effortlessly with AI, where smart
          technology meets user‑friendly SEO tools.
        </p>
        <div className="flex justify-center mt-6 md:mt-36">
          <Button
            text="Join waitlist"
            className="w-40 flex items-center justify-center text-center"
            href="/"
          />
        </div>
      </div>
    </motion.section>
  );
}
