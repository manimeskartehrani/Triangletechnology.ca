"use client";
import LogoIcon from "@/assets/TriangleLogo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import AuthLinks from "@/components/AuthLinks";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-20 backdrop-blur md:backdrop-blur-none sm:block ">
      <div className="absolute  inset-0 backdrop-blur -z-10 hidden"></div>
      <div className=" container ">
        <div className=" flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div className="flex items-center">
            <div className=" w-10 h-10 rounded-lg inline-flex justify-center items-center border-white/15 ">
              <Link href="/">
                <LogoIcon className=" w-20 h-20" />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <Link
                href={"/"}
                className="text-white/70 hover:text-white transition"
              >
                Features
              </Link>
              <Link
                href={"/blog"}
                className="text-white/70 hover:text-white transition"
              >
                Blog
              </Link>
              <Link
                href={"/about"}
                className="text-white/70 hover:text-white transition"
              >
                About
              </Link>
              <Link
                href={"/contact"}
                className="text-white/70 hover:text-white transition"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="gap-6 items-center hidden sm:flex mr-4 ">
            <Button text="Join" />
            <MenuIcon />
            {/* <ThemeToggle />
            <AuthLinks /> */}
          </div>
        </div>
      </div>
    </header>
  );
};
