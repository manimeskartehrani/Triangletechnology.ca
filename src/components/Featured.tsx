import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Featured = () => {
  return (
    <div className="mt-9 ">
      <h1 className="text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl">
        <strong className="font-bold">Hey trianglers and tech lovers!</strong>{" "}
        <small>Discover my stories and business ideas.</small>
      </h1>

      <div className="mt-14 flex items-center gap-12">
        <div className="flex-1 h-[450px] relative sm:hidden ">
          <Image
            src="/assets/analyst-post.avif"
            alt="post-image"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-4xl font-bold sm:text-xl">
            How to do data analysis?
          </h2>
          <p className="text-[20px] font-light sm:text-sm sm:line-clamp-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            blanditiis sint mollitia, inventore ducimus deserunt nulla eligendi
            ipsam deleniti vitae tempore velit ratione omnis itaque laudantium.
            Dolores facilis voluptas consequatur.
          </p>
          <Button className="px-4 py-5 border-none rounded w-max">
            Read more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
