// src/app/api/posts/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "@/types";

export async function GET() {
  const postsDir = path.join(process.cwd(), "/src/blog", "posts");
  const filenames = fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  const posts: BlogPost[] = filenames.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      id: data.id as string,
      slug: data.slug || data.title as string,
      title: data.title as string,
      updatedAt:
        (data.updatedAt as string) || fs.statSync(filePath).mtime.toISOString(),
      // ...any other fields from front‑matter…
    };
  });

  // Sort by updatedAt descending, if you like:
  posts.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  return NextResponse.json({ posts });
}
