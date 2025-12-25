// src/app/blog/page.tsx
import Link from "next/link";
import { getPostSlugs, getPostSource } from "@/lib/posts";

export const revalidate = 60; // rebuild every 60s when traffic hits it

export const runtime = "nodejs";

export default function BlogPage() {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostSource(slug))
    .filter(Boolean)
    .map((p) => p!.meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="container pt-10 pb-16 md:pt-14 md:pb-20">
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">
          Our Blog
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Insights, tips, and tutorials on AI-powered SEO and digital growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
            <article className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:border-purple-500/50 transition">
              <time className="text-sm text-gray-400 block mb-4">
                {new Date(p.date).toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition mb-4">
                {p.title}
              </h2>
              {p.description && (
                <p className="text-gray-300 line-clamp-3">{p.description}</p>
              )}
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
