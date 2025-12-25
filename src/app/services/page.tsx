import { FC } from "react";
import Button from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Triangle Technology",
  description:
    "Explore our professional services in AI-powered SEO, content optimization, programmatic strategies, and web development solutions tailored for your business growth.",
  openGraph: {
    title: "Services | Triangle Technology",
    description:
      "Boost your online presence with cutting-edge AI-driven SEO, content optimization, and advanced web strategies from Triangle Technology.",
    url: "https://www.triangletechnology.ca/services", // ← Full canonical URL
    siteName: "Triangle Technology Canada",
    images: [
      // {
      //   url: "https://www.triangletechnology.ca/og-images/services-page.jpg", // Update when ready
      //   width: 1200,
      //   height: 630,
      //   alt: "Triangle Technology SEO and AI services",
      // },
    ],
    locale: "en_CA",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Services | Triangle Technology",
  //   description:
  //     "AI-powered SEO, content optimization, and advanced strategies to grow your business online.",
  //   images: ["https://www.triangletechnology.ca/og-images/services-page.jpg"],
  // },
};

const ServicesPage: FC = () => {
  return (
    <div className="container pt-10 pb-16 md:pt-14 md:pb-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
          We provide cutting-edge solutions in AI-powered SEO and web
          development to help businesses of all sizes improve their online
          presence, drive organic traffic, and achieve measurable growth.
        </p>
      </section>

      {/* SEO Services */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-600 mb-6">
          SEO Optimization
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-4xl">
          Increase your organic traffic and search visibility with our AI-driven
          SEO strategies and advanced tools.
        </p>
        <ul className="grid md:grid-cols-2 gap-6 max-w-5xl text-lg text-white/80">
          <li>• AI-Optimized Keyword Research tailored to your niche</li>
          <li>• Meta Title & Description Generation</li>
          <li>• Content Optimization for your top pages</li>
          <li>• Google My Business Setup & Optimization</li>
          <li>• Monthly Performance Reports to track progress</li>
        </ul>
      </section>

      {/* Content Optimization */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-600 mb-6">
          Content Optimization
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-4xl">
          Enhance your website content to be more engaging, SEO-friendly, and
          conversion-focused.
        </p>
        <ul className="grid md:grid-cols-2 gap-6 max-w-5xl text-lg text-white/80">
          <li>• Internal Linking Optimization for better site structure</li>
          <li>• AI-Generated Blog Content Suggestions & Drafts (4/month)</li>
          <li>• Schema Markup for Rich Snippets in search results</li>
          <li>• Mobile Optimization & Core Web Vitals Improvements</li>
          <li>• AI-based Image Alt Text & File Naming for better SEO</li>
        </ul>
      </section>

      {/* Advanced SEO Strategies */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-600 mb-6">
          Advanced SEO Strategies
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-4xl">
          Dominate search rankings with programmatic SEO and data-driven
          approaches combining AI insights and expert execution.
        </p>
        <ul className="grid md:grid-cols-2 gap-6 max-w-5xl text-lg text-white/80">
          <li>• Full Website SEO Audit with AI and Expert Reviews</li>
          <li>• Programmatic SEO Strategy & Execution</li>
          <li>• AI-Generated SEO Landing Pages (up to 20/month)</li>
          <li>• Dynamic Content Suggestions based on real-time trends</li>
          <li>• Conversion Rate Optimization (CRO) Recommendations</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gradient-to-b from-transparent to-purple-50 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-600 mb-6">
          Ready to Take Your Business to the Next Level?
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Our experts are here to build a customized strategy that delivers real
          results. Let's work together.
        </p>
        <Button href="/contact" text="Get in Touch" />
      </section>
    </div>
  );
};
export default ServicesPage;
