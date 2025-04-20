
import { getAllPosts } from "@/lib/markdown";
import BlogCard from "@/components/BlogCard";

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
