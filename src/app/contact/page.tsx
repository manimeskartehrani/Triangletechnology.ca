import ContactForm from "@/components/ContactForm";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Triangle Technology",
  description:
    "Learn more about Triangle Technology — our mission, our team, and how we help businesses succeed with AI, SEO, and Web Development.",
  openGraph: {
    title: "Contact Us | Triangle Technology",
    description:
      "Discover how Triangle Technology empowers businesses through cutting-edge AI, SEO strategies, and web solutions.",
    url: "https://www.triangletechnology.ca/contact",
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

const contactPage = () => {
  return (
    <section className="container pt-10 pb-16 md:pt-14 md:pb-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">
          Contact Us
        </h1>
      </div>
      <ContactForm />
    </section>
  );
};

export default contactPage;
