"use client";
import LogoIcon from "@/assets/Logo2_modified.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import AuthLinks from "@/components/AuthLinks";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-20 backdrop-blur md:backdrop-blur-none sm:block">
        <div className="container">
          <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur relative">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg inline-flex justify-center items-center border-white/15">
                <Link href="/">
                  <LogoIcon className="w-20 h-20" />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <nav className="flex gap-8 text-sm">
                {[
                  { name: "Home", href: "/" },
                  { name: "Services", href: "/services" },
                  { name: "Pricing", href: "/pricing" },
                  { name: "Contact", href: "/contact" },
                ].map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    onClick={toggleMenu}
                    className="text-white/70 hover:text-purple-300 transition"
                  >
                    {name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="gap-6 items-center hidden sm:flex mr-4">
              {/* Toggle Button */}
              <motion.button
                onClick={toggleMenu}
                className="transition"
                aria-label="Toggle Menu"
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {isOpen ? (
                  <motion.svg
                    key="x"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.4 }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6l12 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.4 }}
                  >
                    <MenuIcon />
                  </motion.div>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
          >
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 z-[110]"
              aria-label="Close Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: "Pricing", href: "/pricing" },
              { name: "Contact", href: "/contact" },
            ].map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                onClick={toggleMenu}
                className="text-2xl font-semibold text-white hover:text-purple-300 transition"
              >
                {name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
