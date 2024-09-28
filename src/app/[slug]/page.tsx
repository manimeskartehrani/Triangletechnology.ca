import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import Image from "next/image";
import React from "react";

const SinglePage = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center gap-12">
        <div className="flex-1">
          <h1 className="text-6xl mb-12 xl:text-5xl lg:text-4xl md:text-3xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-5 ">
            <div className="w-12 h-12 relative">
              <Image
                src={"/assets/analyst-post.avif"}
                alt="User Image"
                fill
                className="rounded-[50%] object-cover "
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium">Mani - </span>
              <span className="">18-09-2024</span>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[350px] relative lg:hidden">
          <Image
            src={"/assets/analyst-post.avif"}
            alt="Image"
            fill
            className="object-cover "
          />
        </div>
      </div>
      <div className="flex gap-12">
        <div className="flex-[5] mt-20 text-sm font-light sm:text-xs ">
          <p className="  mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab
            delectus neque corrupti excepturi sed voluptates adipisci, cumque
            nisi voluptate necessitatibus, consequuntur error eligendi quia
            doloribus reiciendis voluptatibus repudiandae mollitia.
          </p>
          <h3 className="font-bold text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <p className="  mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab
            delectus neque corrupti excepturi sed voluptates adipisci, cumque
            nisi voluptate necessitatibus, consequuntur error eligendi quia
            doloribus reiciendis voluptatibus repudiandae mollitia.
          </p>
          <p className=" mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab
            delectus neque corrupti excepturi sed voluptates adipisci, cumque
            nisi voluptate necessitatibus, consequuntur error eligendi quia
            doloribus reiciendis voluptatibus repudiandae mollitia.
          </p>
          <p className=" mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab
            delectus neque corrupti excepturi sed voluptates adipisci, cumque
            nisi voluptate necessitatibus, consequuntur error eligendi quia
            doloribus reiciendis voluptatibus repudiandae mollitia.
          </p>

          <div className="">
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
