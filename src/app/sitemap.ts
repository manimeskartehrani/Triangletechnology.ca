// app/sitemap.ts
import type { MetadataRoute } from "next";
import { getStaticRoutes } from "@/lib/getStaticPages";
import { getAllBlogPosts } from "@/lib/getAllBlogPosts";


export const dynamic = 'force-dynamic';

const BASE_URL = "https://triangletechnology.ca";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1) Static pages
  const staticRoutes = getStaticRoutes(); // ["/", "/about", ...]
  const staticEntries = staticRoutes.map(
    (route): MetadataRoute.Sitemap[number] => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date().toLocaleDateString("luxon", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }).replaceAll("/","-"),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  // 2) Dynamic blog posts
  try {
    const posts = await getAllBlogPosts(); // [{ slug, updatedAt }, …]
    const blogEntries = posts.map((post): MetadataRoute.Sitemap[number] => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt).toLocaleDateString("luxon", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }).replaceAll("/","-"),
      changeFrequency: "weekly",
      priority: 0.7,
    }));
    return [...staticEntries, ...blogEntries];
    // Generate sitemap
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return []; // Return an empty sitemap or fallback
  }


  // 3) Dynamic Product pages
  // const products = await getAllProducts();
  // const productEntries = products.map(
  //   (product): MetadataRoute.Sitemap[number] => ({
  //     url: `${BASE_URL}/products/${product.slug}`,
  //     lastModified: new Date(product.updatedAt),
  //     changeFrequency: "weekly",
  //     priority: 0.7,
  //   })
  // );

  // 3) Merge into one array
  
}
