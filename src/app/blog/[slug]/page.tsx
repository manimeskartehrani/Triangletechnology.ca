// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getPostSlugs, getPostSource } from "@/lib/posts";

export const runtime = "nodejs"; // needed anywhere you use fs

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostSource(slug);
  if (!post) notFound();

  const { meta, content } = post;

  const { content: MDXContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false }, // we already parsed it
    // components: { Button }, // add later if you want
  });

  return (
    <article className="container pt-10 pb-16 md:pt-14 md:pb-20">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
          {meta.title}
        </h1>
        <time className="text-gray-400">
          {new Date(meta.date).toLocaleDateString("en-CA", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        {meta.description && (
          <p className="mt-4 text-gray-300">{meta.description}</p>
        )}
      </header>

      <div className="prose prose-invert prose-lg max-w-none">{MDXContent}</div>
    </article>
  );
}
