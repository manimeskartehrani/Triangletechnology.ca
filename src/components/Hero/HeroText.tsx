import React from "react";
import Button from "../Button";

const HeroText: React.FC = () => {
  return (
    <section className="container relative mx-auto px-6 pt-20 md:pt-32 lg:pt-44">
      <div className="text-center mx-auto max-w-full">
        <h1 className="text-gradient hero-heading mb-6 md:mb-10">Triangle</h1>
        <p className="hero-subheading mx-auto sm:max-w-2xl">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>

        <div className="mt-10 md:mt-16 flex justify-center">
          <Button
            text="Join Us"
            href="/signup"
            className="w-sm rounded-lg py-3 font-semibold"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroText;
