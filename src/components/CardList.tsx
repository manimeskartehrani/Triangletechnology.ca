import Image from "next/image";
import React from "react";
import CardPost from "./CardPost";
import Pagination from "./Pagination";

const CardList = () => {
  return (
    <div className="flex-[5] items-center justify-center my-12 sm:my-0 lg:flex-[2] mx-0 ">
      <h2 className="font-bold text-4xl my-10 ">Recent Posts</h2>
      <div className="">
        <CardPost
          date={new Date(Date.now())
            .toISOString()
            .slice(0, 10)
            .replace(/-/g, "-")}
        />
        <CardPost
          date={new Date(Date.now())
            .toISOString()
            .slice(0, 10)
            .replace(/-/g, "-")}
        />
        <CardPost
          date={new Date(Date.now())
            .toISOString()
            .slice(0, 10)
            .replace(/-/g, "-")}
        />
        <CardPost
          date={new Date(Date.now())
            .toISOString()
            .slice(0, 10)
            .replace(/-/g, "-")}
        />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
