import React from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { ThemeContextProvider } from "@/context/ThemeContext";
// import { ThemeProvider } from "@/providers/ThemeProvider";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>{children}</>

  );
};

export default layout;
