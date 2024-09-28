"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthLinks from "./AuthLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center h-24 md:gap-4 ">
        <div className="flex flex-1 lg:hidden">
          <Image src="/assets/preview.png" width={40} height={40} alt="logo" />
        </div>
        <div className="flex flex-1 text-center text-4xl font-bold xl:text-3xl xl:text-left md:text-2xl ">
          Triangle
        </div>
        <div className="flex items-center gap-5 flex-1 text-xl xl:text-lg xl:gap-4 md:justify-end">
          <Link href="/" className="md:hidden">
            Home
          </Link>
          <Link href="/contact" className="md:hidden">
            Contact
          </Link>
          <Link href="/" className="md:hidden">
            About
          </Link>
          <AuthLinks />
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};

export default Navbar;
