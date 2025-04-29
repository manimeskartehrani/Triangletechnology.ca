
import { getAllPosts } from "@/lib/markdown";
import BlogCard from "@/components/BlogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Triangle Technology",
  description:
    "Learn more about Triangle Technology — our mission, our team, and how we help businesses succeed with AI, SEO, and Web Development.",
  openGraph: {
    title: "Blog | Triangle Technology",
    description:
      "Discover how Triangle Technology empowers businesses through cutting-edge AI, SEO strategies, and web solutions.",
    url: "https://triangletechnology/blog",
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

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section className="container py-20">
      <h1 className="text-4xl font-bold mb-10">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.length === 0 ? (
          <p>No blog posts found.</p>
        ) : (
          posts.map((post) => <BlogCard key={post.slug} post={post} />)
        )}
      </div>
    </section>
  );
}
