import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";

export const Footer = () => {
  const todayYear = new Date(Date.now()).getFullYear();

  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <Link
              href="/"
              className="flex items-center justify-center"
              aria-label="Back to homepage"
            />
            <Link href="/" className="flex items-center justify-cente">
              <Image
                height={80}
                width={80}
                src="/assets/TriangleLogo.svg"
                alt="logo"
                className="h-16 w-auto max-w-[100px] cursor-pointer"
              />
            </Link>
            <div className="font-medium leading-none">
              Triangle Technology {todayYear}.
            </div>
          </div>
          {NAV_LINKS.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className="text-white/70 text-xs md:text-sm hover:text-purple-300 transition"
            >
              {name}
            </Link>
          ))}

          <div className="flex gap-5 lg:flex-1 lg:justify-end ">
            {/* <XSocial className="text-white/40 hover:text-white transition" /> */}
            <Image
              height={80}
              width={80}
              src="/assets/social-x.svg"
              alt="x"
              className="bg-transparent transition hover:bg-purple-300"
            />
            <Image
              src="/assets/social-instagram.svg"
              alt="x"
              height={80}
              width={80}
              className="bg-transparent transition hover:bg-purple-300"
            />
            <Image
              src="/assets/social-youtube.svg"
              alt="x"
              height={80}
              width={80}
              className="bg-transparent transition hover:bg-purple-300"
            />
            <Image
              src="/assets/social-linkedin.svg"
              alt="x"
              height={80}
              width={80}
              className="bg-transparent transition hover:bg-purple-300"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
