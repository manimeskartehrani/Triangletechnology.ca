"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import LogoIcon from "@/assets/TriangleLogo.svg";
import Button from "@/components/Button";
import { NAV_LINKS } from "@/constants";
import { useOutsideMultiple } from "@/hooks/useOutsideClick";
import Image from "next/image";

const overlayVariants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1, // Reverse stagger
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const headerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useOutsideMultiple([headerRef, overlayRef], () => setIsOpen(false), isOpen);

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-30 py-4 backdrop-blur sm:block md:border-none"
      >
        <div className="container">
          <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur relative">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Back to homepage"
              className="h-12 w-12 max-w-[70px] flex items-center justify-center rounded-lg border border-white/15"
            >
<<<<<<< HEAD
              <LogoIcon className="w-20 h-20 cursor-pointer"  />
=======
              <Image
                src={LogoIcon}
                alt="logo"
                className="w-20 h-20 cursor-pointer"
              />
>>>>>>> 8316e08 (Fix: Logo Component)
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex w-full max-w-2xl items-center justify-center">
              <nav className="flex gap-8 text-sm">
                {NAV_LINKS.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    className="text-white/70 hover:text-purple-300 transition"
                  >
                    {name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center mr-4">
              <button
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                className="rounded-md w-8 h-8 flex items-center justify-center transition z-[101]"
              >
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  initial={false}
                  animate={isOpen ? "open" : "closed"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M3 6h18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    variants={{
                      closed: { d: "M3 6h18" },
                      open: { d: "M6 6L18 18" },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.path
                    d="M3 12h18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.path
                    d="M3 18h18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    variants={{
                      closed: { d: "M3 18h18" },
                      open: { d: "M6 18L18 6" },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.svg>
              </button>
            </div>

            {/* Desktop Join Button */}
            <div className="hidden md:flex">
              <Button text="Join" />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            // ref={overlayRef}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] bottom-0 z-[100] bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map(({ name, href }, index) => (
              <motion.div key={name} variants={itemVariants} custom={index}>
                <Link
                  href={href}
                  onClick={(e) => {
                    e.stopPropagation(); // prevent bubbling
                    setIsOpen(false);
                  }}
                  className="text-2xl font-semibold text-white hover:text-purple-300 transition"
                >
                  {name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
