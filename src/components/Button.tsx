"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  type ValueAnimationTransition,
} from "framer-motion";

type ButtonProps = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  type = "button",
  href,
  disabled = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!ref.current) return;

    const updateAnimation = () => {
      const rect = ref.current!.getBoundingClientRect();
      const { height, width } = rect;

      if (height === 0 || width === 0) return;

      const circumference = height * 2 + width * 2;

      const times = [
        0,
        width / circumference,
        (width + height) / circumference,
        (width * 2 + height) / circumference,
        1,
      ];

      const options: ValueAnimationTransition<number> = {
        times,
        duration: 4,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      };

      // Correct v12 syntax: array as second argument for keyframes
      animate(xPercentage, [0, 100, 100, 0, 0], options);
      animate(yPercentage, [0, 0, 100, 100, 0], options);
    };

    // Initial animation
    updateAnimation();

    // Restart animation on resize to adapt to new size
    const handleResize = () => {
      xPercentage.set(0);
      yPercentage.set(0);
      updateAnimation();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [xPercentage, yPercentage]); // Fixes the exhaustive-deps warning

  const baseStyles =
    "relative inline-block py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]";

  const content = (
    <>
      {/* Animated glowing border mask */}
      <motion.div
        ref={ref}
        style={{ maskImage }}
        className="pointer-events-none absolute inset-0 -m-px rounded-xl border border-[#A369FF]"
        aria-hidden="true"
      />

      {/* Button text */}
      <span className="relative z-10">{text}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clsx(baseStyles, className)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        className,
        disabled && "opacity-70 cursor-not-allowed"
      )}
    >
      {content}
    </button>
  );
};
export default Button;
