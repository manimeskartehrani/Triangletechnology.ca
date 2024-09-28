import React from "react";

const LoginPage = () => {
  return (
    <div className=" flex items-center justify-center mt-16">
      <div className="bg-primary py-40 px-52 flex flex-col gap-12 rounded-xl md:py-12 md:px-24 sm:p-8 sm:font-normal sm:text-xs ">
        <div className="p-5 border-none rounded font-bold cursor-pointer flex justify-center items-center bg-[#ff5555]">
          Sign in with Google
        </div>
        <div className="p-5 border-none rounded font-bold cursor-pointer flex justify-center items-center dark:bg-[#111] bg-secondary">
          Sign in with Github
        </div>
        <div className="p-5 border-none rounded font-bold cursor-pointer flex justify-center items-center bg-[#087bea]">
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
