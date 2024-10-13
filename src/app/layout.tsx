import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import React from "react";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Triangle Landing Page",
  description: "Triangle Technology 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, " text-white antialiased  ")}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="min-h-screen bg-black dark:bg-[#0f172a] ">
              <div className=" ml-auto mr-auto">
                <Header />
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
