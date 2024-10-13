import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = ({
  titleText,
  setting,
  width,
}: {
  titleText: string;
  setting: string;
  width: string;
}) => {
  return (
    <>
      <h2 className="mt-10 mx-0 font-bold text-4xl">{titleText}</h2>
      <div
        className={
          "flex-wrap gap-5 text-white mt-5 flex mb-[-30px] sm:mb-10 " +
          `${setting}`
        }
      >
        <Link
          href="/blog?cat=style"
          className={
            "flex items-center gap-2 capitalize bg-coffee h-20 justify-center rounded-xl lg:w-1/3 md:w-5/12 sm:w-full  bg-cover bg-center " +
            `${width}`
          }
        >
          Coffee
        </Link>
        <Link
          href="/blog?cat=style"
          className={
            "flex items-center gap-2 capitalize bg-web h-20 justify-center rounded-xl lg:w-1/3 md:w-5/12 sm:w-full  bg-cover bg-center " +
            `${width}`
          }
        >
          web Development
        </Link>
        <Link
          href="/blog?cat=style"
          className={
            "flex items-center gap-2 capitalize h-20 justify-center rounded-xl lg:w-1/3 md:w-5/12 sm:w-full bg-data bg-cover  bg-center " +
            `${width}`
          }
        >
          Data analysis
        </Link>
        <Link
          href="/blog?cat=style"
          className={
            "flex items-center gap-2 capitalize bg-teaching bg-cover  h-20 justify-center rounded-xl lg:w-1/3 md:w-5/12 sm:w-full bg-center " +
            `${width}`
          }
        >
          Teaching
        </Link>
      </div>
    </>
  );
};

export default CategoryList;
