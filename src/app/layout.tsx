// app/layout.tsx
import { GoogleAnalytics } from "@next/third-parties/google";
import { poppins, openSans } from "@/lib/fonts";
import "./globals.css";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export const metadata = {
  title: "Triangle – Elevate Your SEO",
  description: "Triangle Technology Canada - Elevate Your SEO with AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${poppins.variable} ${openSans.variable}`}
    >
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </head>
      <body suppressHydrationWarning className="antialiased">
        <div className="min-h-screen flex flex-col w-full">
          <Header />
          <main className="w-full mx-auto">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
