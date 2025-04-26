import { GoogleAnalytics} from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import React from "react";

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Poppins, Open_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-heading",
});
export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-body",
});

export const metadata = {
  title: "Triangle – Elevate Your SEO",
  description: "Triangle Technology Canada - Elevate Your SEO with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      
      <body className={twMerge(inter.className, " text-white antialiased  ")}>
      {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
    
            <div className="min-h-screen bg-[#0f0616] ">
              <div className=" ml-auto mr-auto">
                <Header />
                {children}
                <Footer />
              </div>
            </div>

      </body>
    </html>
  );
}
