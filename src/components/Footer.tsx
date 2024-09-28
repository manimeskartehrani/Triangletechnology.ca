import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" mt-12 py-0 px-5 flex justify-between md:flex-col md:gap-8 mb-0">
      <div className="flex-1 flex flex-col gap-4 ">
        <div className="flex items-center gap-2">
          <Image
            src={"/assets/sun.png"}
            alt="Triangle logo"
            width={50}
            height={50}
          />
          <h3 className="text-base">Triangle Blog</h3>
        </div>
        <p className="font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit placeat
          quam, fuga accusantium aut recusandae praesentium consequuntur
          distinctio quidem voluptates quae ullam minima deleniti illo natus,
          iure impedit ipsam hic.
        </p>
        <div className="flex gap-3 mt-3">
          <Image
            src={"/assets/moon.png"}
            alt="facebook logo"
            width={20}
            height={20}
          />
          <Image
            src={"/assets/moon.png"}
            alt="instagram logo"
            width={20}
            height={20}
          />
          <Image
            src={"/assets/moon.png"}
            alt="tiktok logo"
            width={20}
            height={20}
          />
          <Image
            src={"/assets/moon.png"}
            alt="youtube logo"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="flex-1 flex justify-end gap-20 items-center lg:gap-12 md:w-full md:justify-between sm:text-xs">
        <div className="flex flex-col gap-3 font-thin ">
          <span className="font-bold">Links</span>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <div className="flex flex-col font-thin gap-3">
          <span className="font-bold">Tags</span>
          <Link href={"/"}>Coffee</Link>
          <Link href={"/"}>Web development</Link>
          <Link href={"/"}>Data Analysis</Link>
          <Link href={"/"}>Teaching</Link>
        </div>
        <div className="flex flex-col font-thin gap-3">
          <span className="font-bold">Social</span>
          <Link href={"/"}>Facebook</Link>
          <Link href={"/"}>Instagram</Link>
          <Link href={"/"}>Tiktok</Link>
          <Link href={"/"}>Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
