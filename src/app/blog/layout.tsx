import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ThemeContextProvider } from "../../context/ThemeContext";
import { ThemeProvider } from "../../providers/ThemeProvider";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>{children}</>
    // <ThemeContextProvider>
    //   <ThemeProvider>
    //     <div className="min-h-screen dark:bg-[#0f172a] dark:text-white  ">
    //       <div className=" max-w-[1536px] ml-auto mr-auto pl-20 pr-20 2xl:max-w-[1366px] xl:max-w-[1280px] lg:max-w-[768px] lg:pl-10 lg:pr-10 md:max-w-[640px] sm:max-w-[475px]">
    //         <Navbar />
    //         {children}
    //         <Footer />
    //       </div>
    //     </div>
    //   </ThemeProvider>
    // </ThemeContextProvider>
  );
};

export default layout;
