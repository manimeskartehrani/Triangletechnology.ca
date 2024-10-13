import Link from "next/link";
import React from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className="mt-12">
      <h2 className="text-2xl mb-7">Comments</h2>
      {status === "authenticated" ? (
        <div className="flex flex-col items-start justify-end">
          {" "}
          <Textarea placeholder="write a comment..." className="mb-7 " />{" "}
          <Button className="w-1/5 mb-7 px-4 py-5 font-bold border-none rounded cursor-pointer dark:bg-green-700">
            Send
          </Button>{" "}
        </div>
      ) : (
        <Link href="/login">Login to write a comment </Link>
      )}
      <div className="mt-12">
        <div className="mb-12">
          <div className="flex items-center gap-5 mb-5">
            <Image
              src={"/assets/analyst-post.avif"}
              alt=""
              width={50}
              height={50}
              className="object-cover rounded-full"
            />
            <div className="flex flex-col gap-2">
              <span className="font-medium">Mani</span>
              <span className="text-xs">19.09.2024</span>
            </div>
          </div>
          <p className="text-sm font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            voluptatum iure sapiente, reprehenderit ullam enim ex sed ipsa
            recusandae illum fuga vero animi. Aliquam tempore tenetur ipsam,
            porro ducimus fugit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
