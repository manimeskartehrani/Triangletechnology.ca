import Link from "next/link";
import React, { useState } from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className="sm:hidden">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="sm:hidden">
            Write
          </Link>
          <span className="cursor-pointer">Logout</span>
        </>
      )}
      <div
        className="w-5 h-4 flex-col justify-between hidden cursor-pointer sm:flex"
        onClick={() => setOpen(!open)}
      >
        <div className="w-full h-1 bg-slate-500"></div>
        <div className="w-full h-1 bg-slate-500"></div>
        <div className="w-full h-1 bg-slate-500"></div>
      </div>
      {open && (
        <div className="absolute top-24 left-0 bg-white flex-col w-screen flex justify-center items-center gap-12 text-3xl h-lvh dark:bg-[#0f172a]">
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className="cursor-pointer sm:hidden">Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
