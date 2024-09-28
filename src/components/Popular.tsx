import Image from "next/image";
import Link from "next/link";
import React from "react";

const Popular = ({
  text,
  category,
  imageSrc,
  writer,
  date,
  setting,
}: {
  text: string;
  category: string;
  imageSrc: string;
  writer: string;
  date: string;
  setting?: string;
}) => {
  return (
    <div className="my-1">
      <Link href="/" className="flex items-center gap-5">
        <div className={"flex-1 relative aspect-square " + `${setting}`}>
          <Image
            src={imageSrc}
            alt="coffee"
            fill
            className={
              "rounded-full border-[3px] border-solid border-gray-300 object-cover "
            }
          />
        </div>
        <div className="flex-[4] relative flex flex-col gap-1 ">
          <span className="px-1 py-2 rounded-xl text-sm text-white bg-orange-400 w-fit capitalize">
            {category}
          </span>
          <h4 className=" font-medium text-sm text-gray-300 sm:line-clamp-4 sm:w-fit">
            {text}
          </h4>
          <div className="text-[12px]">
            <span className="">{writer} - </span>
            <span className="text-gray-400">{date}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Popular;
