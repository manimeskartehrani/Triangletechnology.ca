
import { getAllPosts, getPostBySlug } from "@/lib/markdown";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.content,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="container max-w-3xl py-20 mx-auto">
      {/* Blog Post Title */}
      <div className="mt-10">
        <div className="flex items-center gap-12">
          <div className="flex-1">
            <h1 className="text-6xl text-purple-500 mb-12 xl:text-5xl lg:text-4xl md:text-3xl ">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Blog Post Meta Info */}
      <div className="text-white/70 text-center mb-8">
        <div>
          <div className="flex flex-col gap-2">
            <span className="font-bold">{post.slug}</span>
            <span >{post.date}</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg dark:prose-invert mx-auto">
        <div className="" dangerouslySetInnerHTML={{ __html: post.content }} />

      </div>
    </article>
  );
}


