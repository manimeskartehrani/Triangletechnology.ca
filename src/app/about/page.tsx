import { FC } from "react";
import Button from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Triangle Technology",
  description:
    "Learn more about Triangle Technology — our mission, team, and how we empower businesses with AI, SEO, and modern web development.",
  openGraph: {
    title: "About Us | Triangle Technology",
    description:
      "Discover how Triangle Technology helps businesses grow through innovative AI, SEO, and web solutions.",
    url: "https://www.triangletechnology.ca/about", // ← Fix: full canonical URL
    siteName: "Triangle Technology Canada",
    //     images: [
    //       {
    //         url: "https://www.triangletechnology.ca/og-images/about-page.jpg", // Update when you have the real image
    //         width: 1200,
    //         height: 630,
    //         alt: "Triangle Technology team and mission",
    //       },
    //     ],
    //     locale: "en_CA",
    //     type: "website",
    //   },
    //   twitter: {
    //     card: "summary_large_image",
    //     title: "About Us | Triangle Technology",
    //     description:
    //       "Empowering businesses with cutting-edge AI, SEO, and web development solutions.",
    //     images: ["https://www.triangletechnology.ca/og-images/about-page.jpg"],
  },
};

const AboutPage: FC = () => {
  return (
    <div className="container pt-10 pb-16 md:pt-14 md:pb-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Learn more about our mission, vision, and the passionate team behind
          Triangle Technology.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-600 mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-white/80 max-w-4xl">
          At Triangle Technology, we strive to make advanced AI, SEO, and web
          development solutions accessible to businesses of all sizes. We’re
          committed to delivering innovative, tailored strategies that drive
          real results — whether you're a startup finding your footing or an
          established brand scaling new heights.
        </p>
      </section>

      {/* Our Values Section */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-600 mb-8">
          Our Values
        </h2>
        <ul className="grid md:grid-cols-2 gap-8 max-w-5xl">
          <li className="text-lg text-white/80">
            <span className="font-semibold text-purple-600">Innovation:</span>{" "}
            We embrace cutting-edge technologies to deliver forward-thinking
            solutions.
          </li>
          <li className="text-lg text-white/80">
            <span className="font-semibold text-purple-600">Integrity:</span> We
            believe in transparent, honest, and ethical business practices.
          </li>
          <li className="text-lg text-white/80">
            <span className="font-semibold text-purple-600">
              Collaboration:
            </span>{" "}
            We partner closely with clients to understand and meet their unique
            needs.
          </li>
          <li className="text-lg text-white/80">
            <span className="font-semibold text-purple-600">Excellence:</span>{" "}
            We pursue the highest standards in every project, aiming to exceed
            expectations.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gradient-to-b from-transparent to-purple-50 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-600 mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Let’s bring your vision to life. Get in touch today and discover how
          we can help you succeed in the digital world.
        </p>

        <Button href="/contact" text="Get in Touch" />
      </section>
    </div>
  );
};

export default AboutPage;
