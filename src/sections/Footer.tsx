import Logo from "@/assets/TriangleLogo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTScocial from "@/assets/social-youtube.svg";
import LSocial from "@/assets/social-linkedin.svg";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

export const Footer = () => {
  const todayYear = new Date(Date.now()).getFullYear();

  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <Link href="/" className="flex items-center justify-center" aria-label="Back to homepage">
              <Logo className="h-16 w-auto max-w-[100px] cursor-pointer" />
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
            <XSocial className="text-white/40 hover:text-white transition" />
            <InstaSocial className="text-white/40 hover:text-white transition" />
            <YTScocial className="text-white/40 hover:text-white transition" />
            <LSocial className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
