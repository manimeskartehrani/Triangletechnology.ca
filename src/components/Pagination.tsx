import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Pagination = () => {
  return (
    <div className="flex justify-between">
      <Button className="w-1/5 border-none p-4 bg-primary cursor-pointer sm:w-1/4">
        Previous
      </Button>
      <Button className="w-1/5 border-none p-4 bg-primary cursor-pointer sm:w-1/4">
        Next
      </Button>
    </div>
  );
};

export default Pagination;
