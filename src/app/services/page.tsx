// pages/services.tsx

import { FC } from "react";
import Button from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Triangle Technology",
  description:
    "Learn more about Triangle Technology — our mission, our team, and how we help businesses succeed with AI, SEO, and Web Development.",
  openGraph: {
    title: "Services | Triangle Technology",
    description:
      "Discover how Triangle Technology empowers businesses through cutting-edge AI, SEO strategies, and web solutions.",
    url: "https://triangletechnology/services",
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

const ServicesPage: FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          Our Services
        </h1>
        <p className="text-lg text-gray-700">
          We offer a range of advanced solutions to help your business grow and
          succeed in the digital world. Our services are designed to help
          businesses of all sizes enhance their online presence, optimize
          performance, and achieve measurable results.
        </p>
      </section>

      {/* SEO Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-purple-600 mb-4">
          SEO Optimization
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Our SEO services help you increase organic traffic and improve your
          website's visibility. We use advanced tools and AI-driven strategies
          to optimize your website, ensuring it ranks higher on search engines
          and attracts more visitors.
        </p>
        <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
          <li>AI-Optimized Keyword Research tailored to your niche</li>
          <li>Meta Title & Description Generation</li>
          <li>Content Optimization for your top pages</li>
          <li>Google My Business Setup & Optimization</li>
          <li>Monthly Performance Reports to track progress</li>
        </ul>
      </section>

      {/* Content Optimization */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-purple-600 mb-4">
          Content Optimization
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We offer comprehensive content optimization services to enhance your
          site's content. Whether it's improving existing content or creating
          new blog posts, our team ensures your content is SEO-friendly and
          designed to convert.
        </p>
        <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
          <li>Internal Linking Optimization for better site structure</li>
          <li>AI-Generated Blog Content Suggestions & Drafts (4/month)</li>
          <li>Schema Markup for Rich Snippets in search results</li>
          <li>Mobile Optimization & Core Web Vitals Improvements</li>
          <li>AI-based Image Alt Text & File Naming for better SEO</li>
        </ul>
      </section>

      {/* Advanced SEO Strategies */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-purple-600 mb-4">
          Advanced SEO Strategies
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Our advanced SEO strategies are designed for businesses that want to
          dominate search rankings. We take a comprehensive, programmatic
          approach to SEO, combining AI insights with human expertise.
        </p>
        <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
          <li>Full Website SEO Audit with AI and Expert Reviews</li>
          <li>Programmatic SEO Strategy & Execution</li>
          <li>AI-Generated SEO Landing Pages (up to 20/month)</li>
          <li>Dynamic Content Suggestions based on real-time trends</li>
          <li>Conversion Rate Optimization (CRO) Recommendations</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-purple-600 mb-4">
          Ready to take your business to the next level?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Our team of experts is ready to help you achieve your goals. Let’s
          work together to create a customized strategy for your business.
        </p>
        <Button href="/contact" text="Get in Touch" className="w-40" />
      </section>
    </div>
  );
};

export default ServicesPage;
