"use client";
import acmeLogo from "@/assets/logo-acme.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import apexLogo from "@/assets/logo-apex.png";
import quantumLogo from "@/assets/logo-quantum.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center">
          <div className="flex-1 md:flex-none ">
            <h2 className="">Trusted by top innovative teams</h2>
          </div>
          <div className="flex flex-1 overflow-hidden gap-5 mask-image-gradient-to-r from-transparent to-black/80 to-20%">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2 "
            >
              {[
                acmeLogo,
                pulseLogo,
                echoLogo,
                celestialLogo,
                apexLogo,
                quantumLogo,
                acmeLogo,
                pulseLogo,
                echoLogo,
                celestialLogo,
                apexLogo,
                quantumLogo,
              ].map((logo) => (
                <Image
                  src={logo.src}
                  key={logo.src + `${Math.random() * 12}`}
                  alt="logo"
                  className="h-6 w-auto"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
