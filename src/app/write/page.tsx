"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="">
      <Input
        type="text"
        placeholder="Title"
        className="border-none bg-transparent text-6xl outline-none p-12 text-[#b3b3b1]"
      />
      <div className="flex gap-5 relative h-[700px] rounded-full">
        <Button
          className="w-14 h-14 rounded-full bg-transparent flex items-center justify-center cursor-pointer border-none border-green-500"
          onClick={() => setOpen(!open)}
        >
          <Image
            src={"/assets/plus.png"}
            alt=""
            width={40}
            height={40}
            className="font-bold "
          />
        </Button>
        {open && (
          <div className="flex gap-5 absolute z-[999] w-full left-20 top-12">
            <Button className="w-14 h-14 rounded-full bg-transparent flex items-center justify-center cursor-pointer border border-solid border-green-500">
              <Image
                src={"/assets/image.png"}
                alt=""
                width={40}
                height={40}
                className="object-cover"
              />
            </Button>
            <Button className="w-14 h-14 rounded-full bg-transparent flex items-center justify-center cursor-pointer border border-solid border-green-500">
              <Image
                src={"/assets/external.png"}
                alt=""
                width={40}
                height={40}
                className="object-cover"
              />
            </Button>
            <Button className="w-14 h-14 rounded-full bg-transparent flex items-center justify-center cursor-pointer border border-solid border-green-500 font-bold">
              <Image
                src={"/assets/video.png"}
                alt=""
                width={40}
                height={40}
                className="object-cover"
              />
            </Button>
          </div>
        )}
        <ReactQuill
          className="w-full"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <Button className="absolute top-7 border-none right-5 px-2 py-5 cursor-pointer rounded-2xl">
        Published
      </Button>
    </div>
  );
};

export default WritePage;
