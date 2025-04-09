import Logo from "@/assets/TriangleLogo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTScocial from "@/assets/social-youtube.svg";

export const Footer = () => {
  const todayYear = new Date(Date.now()).getFullYear()

  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <Logo className="h-20 w-20" />
            <div className="font-medium">Triangle Technology {todayYear}.</div>
          </div>

          <nav className="flex flex-col lg:flex-row lg:gap-7 gap-5 lg:flex-1 lg:justify-center">
            <a
              href="/"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Features
            </a>
            <a
              href="/about"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Company
            </a>
            <a
              href="/blog"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Blog
            </a>
            <a
              href="/services"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Services
            </a>
          </nav>

          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XSocial className="text-white/40 hover:text-white transition" />
            <InstaSocial className="text-white/40 hover:text-white transition" />
            <YTScocial className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
