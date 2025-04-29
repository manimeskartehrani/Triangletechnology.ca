import { FC, useState, useEffect } from "react";
import Button from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Triangle Technology",
  description:
    "Learn more about Triangle Technology — our mission, our team, and how we help businesses succeed with AI, SEO, and Web Development.",
  openGraph: {
    title: "About Us | Triangle Technology",
    description:
      "Discover how Triangle Technology empowers businesses through cutting-edge AI, SEO strategies, and web solutions.",
    url: "https://triangletechnology/about",
    siteName: "Triangle Technology Canada",
    // images: [
    //   {
    //     url: "https://yourdomain.com/og-images/about-page.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "About Triangle Technology",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "About Us | Triangle Technology",
  //   description:
  //     "Discover how Triangle Technology empowers businesses with AI, SEO, and web development.",
  //   images: ["https://yourdomain.com/og-images/about-page.jpg"],
  // },
};
const AboutPage: FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          Learn more about our mission, vision, and the people behind Triangle
          Technology.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-purple-600 mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700">
          At Triangle Technology, we strive to make advanced AI, SEO, and Web
          Development solutions accessible to businesses of all sizes. We are
          committed to providing businesses with the tools and strategies they
          need to succeed in the digital world. Whether you're a startup or an
          established brand, we can help you achieve your goals through
          innovative and tailored solutions.
        </p>
      </section>

      {/* Our Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-purple-600 mb-4">
          Our Values
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
          <li>
            Innovation: We embrace cutting-edge technologies to deliver the best
            solutions.
          </li>
          <li>
            Integrity: We believe in transparent, honest, and fair business
            practices.
          </li>
          <li>
            Collaboration: We work closely with our clients to understand their
            unique needs and provide customized strategies.
          </li>
          <li>
            Excellence: We aim for excellence in every project, striving to
            exceed expectations.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-purple-600 mb-4">
          Ready to work with us?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          We’d love to help you bring your ideas to life. Get in touch with us
          today to discuss how we can assist you in achieving your business
          goals.
        </p>

        <Button href="/contact" text="Get in Touch" className="w-40" />
      </section>
    </div>
  );
};

export default AboutPage;
