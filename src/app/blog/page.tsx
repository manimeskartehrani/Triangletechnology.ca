import CardList from "@/components/CardList";
import Menu from "@/components/Menu";
import React from "react";

const BlogPage = () => {
  return (
    <div className="">
      <h1 className="bg-orange-400 text-4xl font-bold text-white px-1 py-2 text-center">
        Style Blog
      </h1>
      <div className="flex gap-12">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
