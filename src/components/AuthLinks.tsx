import Link from "next/link";
import MenuIcon from "@/assets/icon-menu.svg";
import React, { useState } from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const status = "notauthenticated";

  // STATE TO TRACK IF SIDEDRAWER IS OPEN OR CLOSED
  const [showSideDrawer, setshowSideDrawer] = useState(false);

  //  FUNCTION TO HANDLE CLOSE ACTION ON SIDEDRAWER/MODAL
  const sideDrawerClosedHandler = () => {
    setshowSideDrawer(false);

    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

  // FUNCTION TO HANDLE OPEN ACTION ON SIDEDRAWER/MODAL
  const showSidebar = () => {
    setshowSideDrawer(true);

    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div className="">
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
        className=" w-5 h-4 flex-col justify-between hidden cursor-pointer sm:flex "
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </div>
      {/* <div
        className=" w-5 h-4 flex-col justify-between hidden cursor-pointer sm:flex "
        onClick={() => setOpen(!open)}
      >
        <div className="w-full h-1 bg-white/70"></div>
        <div className="w-full h-1 bg-white/70"></div>
        <div className="w-full h-1 bg-white/70"></div>
      </div> */}
      {open && (
        <div className="absolute flex flex-col top-14 -left-5 text-2xl w-screen justify-between items-center bg-[#0f172a]/80  h-[100vh]  shadow-lg border-b border-gray-400 z-20  ">
          <div className=" flex flex-col z-30 gap-10   ">
            <Link
              href={"/"}
              className="text-white/70 hover:text-white hover:underline transition mt-10"
              onClick={() => setOpen(!open)}
            >
              Features
            </Link>
            <Link
              href={"/blog"}
              className="text-white/70 hover:text-white transition hover:underline"
              onClick={() => setOpen(!open)}
            >
              Blog
            </Link>
            <Link
              href={"#"}
              className="text-white/70 hover:text-white transition hover:underline"
              onClick={() => setOpen(!open)}
            >
              About
            </Link>
            <Link
              href={"#"}
              className="text-white/70 hover:text-white transition hover:underline"
              onClick={() => setOpen(!open)}
            >
              Contact
            </Link>
            {status === "notauthenticated" ? (
              <Link
                href="/login"
                className="text-white/70 hover:text-white transition hover:underline"
                onClick={() => setOpen(!open)}
              >
                Login
              </Link>
            ) : (
              <>
                <Link href="/write">Write</Link>
                <span className="cursor-pointer">Logout</span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthLinks;

// absolute  top-16 left-0 inset-0 flex-col w-[100%] flex justify-center items-center gap-12 text-3xl h-fit md:backdrop-blur
