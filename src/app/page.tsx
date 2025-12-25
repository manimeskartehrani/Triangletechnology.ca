import { CallToAction } from "@/sections/CallToAction";
import { Features } from "@/sections/Features";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import Pricing from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto">
        {/* <LogoTicker /> */}
        {/* <Features />
        <Testimonials /> */}
        <CallToAction />
        <Pricing />
      </div>
    </>
  );
}
