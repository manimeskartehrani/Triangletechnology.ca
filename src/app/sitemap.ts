// app/sitemap.ts
import type { MetadataRoute } from "next";
import { getStaticRoutes } from "@/lib/getStaticPages";
import { getAllPosts } from "@/lib/posts";

export const revalidate = 60; // adjust if you want a different ISR window

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://triangletechnology.ca";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!BASE_URL) {
    throw new Error("NEXT_PUBLIC_SITE_URL is required for sitemap generation");
  }

  const staticEntries = getStaticRoutes().map(
    (route): MetadataRoute.Sitemap[number] => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const blogEntries = getAllPosts().map(
    (post): MetadataRoute.Sitemap[number] => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.date),
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  return [...staticEntries, ...blogEntries];
}
