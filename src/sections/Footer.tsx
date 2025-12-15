import Logo from "@/assets/TriangleLogo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTScocial from "@/assets/social-youtube.svg";
import LSocial from "@/assets/social-linkedin.svg";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
<<<<<<< HEAD
=======
import LinkedIn from "@/assets/LinkedIn.svg";
import Image from "next/image";
>>>>>>> 8316e08 (Fix: Logo Component)

export const Footer = () => {
  const todayYear = new Date(Date.now()).getFullYear();

  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
<<<<<<< HEAD
            <Link href="/" className="flex items-center justify-center" aria-label="Back to homepage">
              <Logo className="h-16 w-auto max-w-[100px] cursor-pointer" />
=======
            <Link href="/" className="flex items-center justify-cente">
              <Image
                src={Logo}
                alt="logo"
                className="h-16 w-auto max-w-[100px] cursor-pointer"
              />
              {/* <Logo className="h-16 w-auto max-w-[100px] cursor-pointer" /> */}
>>>>>>> 8316e08 (Fix: Logo Component)
            </Link>
            <div className="font-medium leading-none">
              Triangle Technology {todayYear}.
            </div>
          </div>
          {NAV_LINKS.map(({ name, href }) => (
            <Link
              href={href}
              className="text-white/70 text-xs md:text-sm hover:text-purple-300 transition"
            >
              {name}
            </Link>
          ))}

          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            {/* <XSocial className="text-white/40 hover:text-white transition" /> */}
            <Image
              src={XSocial}
              alt="x"
              className="text-white/40 hover:text-white transition"
            />
            <Image
              src={InstaSocial}
              alt="x"
              className="text-white/40 hover:text-white transition"
            />
            <Image
              src={YTScocial}
              alt="x"
              className="text-white/40 hover:text-white transition"
            />
            <Image
              src={LinkedIn}
              alt="x"
              className="text-white/40 hover:text-white transition"
            />
            {/* <InstaSocial className="text-white/40 hover:text-white transition" />
            <YTScocial className="text-white/40 hover:text-white transition" />
<<<<<<< HEAD
            <LSocial className="text-white/40 hover:text-white transition" />
=======
            <LinkedIn className="text-white/40 hover:text-white transition" /> */}
>>>>>>> 8316e08 (Fix: Logo Component)
          </div>
        </div>
      </div>
    </footer>
  );
};
