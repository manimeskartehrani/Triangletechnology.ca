// src/lib/getAllBlogPosts.ts
import type { BlogPost } from "@/types";
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const res = await fetch("https://triangletechnology.ca/api/posts", { method: "GET" });
  if (!res.ok) {
    throw new Error(`Failed to fetch blog posts: ${res.statusText}`);
  }
  const { posts } = await res.json();
  return posts;
}
