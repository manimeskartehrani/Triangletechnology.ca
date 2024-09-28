import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeContextProvider } from "../context/ThemeContext";
import { ThemeProvider } from "../providers/ThemeProvider";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog",
  description: "Triangle blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="p-0 m-0 box-border" suppressHydrationWarning>
      <body className={`${inter.className} + w-screen overflow-x-hidden  `}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="min-h-screen dark:bg-[#0f172a] dark:text-white  ">
              <div className=" max-w-[1536px] ml-auto mr-auto pl-20 pr-20 2xl:max-w-[1366px] xl:max-w-[1280px] lg:max-w-[768px] lg:pl-10 lg:pr-10 md:max-w-[640px] sm:max-w-[475px]">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
