"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";

type ButtonProps = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  maskImage?: string;
  selected?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  type = "button",
  href,
  selected = false,
}) => {
  const tabRefDiv = useRef<HTMLDivElement>(null);
  const tabRefButton = useRef<HTMLButtonElement>(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    xPercentage.set(0);
    yPercentage.set(0);
    const rect = tabRefDiv.current?.getBoundingClientRect();
    const height = rect?.height ?? 0;
    const width = rect?.width ?? 0;
    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];
    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, []);
  const baseStyles =
    "relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]";

  const layers = (
    <>
      <motion.div
        ref={tabRefDiv}
        style={{ maskImage }}
        className="absolute inset-0 -m-px border border-[#A369FF] rounded-xl"
      />
     
      <span className="relative z-20">{text}</span>
    </>
  );

  // If href is provided, render as a link
  if (href) {
    return (
      <Link
        href={href}
        className={clsx(baseStyles, className, "inline-block relative")}
      >
        {layers}
      </Link>
    );
  }

  // Otherwise, render a regular button
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyles, className)}
      ref={tabRefButton}
    >
      {layers}
    </button>
  );
};

export default Button;
