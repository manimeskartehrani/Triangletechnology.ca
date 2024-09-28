import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const CardPost = ({ date }: { date: string }) => {
  return (
    <div className=" flex mb-12 sm:mb-6 items-center gap-12 ">
      <div className=" flex-1 h-[350px] relative xl:hidden">
        <Image
          src="/assets/analyst-post.avif"
          alt="text"
          fill
          className="object-cover"
        />
      </div>
      <div className=" flex flex-1 flex-col gap-7 ">
        <div className="">
          <span className="text-gray-400">{date} - </span>
          <span className="text-red-500 font-medium">Coffee</span>
        </div>
        <Link
          href={""}
          className="flex font-bold text-xl sm:text-sm sm:line-clamp-4"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Link>
        <p className="text-base font-light sm:text-sm sm:line-clamp-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          quis fugit eligendi qui incidunt ad aliquam accusantium! Aspernatur
          exercitationem eum quidem, sapiente impedit quia a. Provident fugiat
          facere unde quis!
        </p>
        <Link
          href={""}
          className="border-b border-solid border-red-400 w-fit pt-1 pb-0"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default CardPost;
