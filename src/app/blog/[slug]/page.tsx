
import { getAllPosts, getPostBySlug } from "@/lib/markdown";
import { Menu } from "@radix-ui/react-menubar";
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
            <span className="">{post.date}</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg dark:prose-invert mx-auto">
        <div className="" dangerouslySetInnerHTML={{ __html: post.content }} />

      {/* <div className="">
              <Comments />
            </div> */}

      {/* <Menu /> */}
      </div>
    </article>
  );
}

//  <div className="mt-10">
{
  /* <div className="flex items-center gap-12">
<div className="flex-1">
  <h1 className="text-6xl mb-12 xl:text-5xl lg:text-4xl md:text-3xl ">
    {post.title}
  </h1>
  <div className="flex items-center gap-5 ">
    <div className="w-12 h-12 relative">
      <Image
        src={"/assets/analyst-post.avif"}
        alt="User Image"
        fill
        className="rounded-[50%] object-cover "
      />
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium">Mani - </span>
      <span className="">18-09-2024</span>
    </div>
  </div>
</div>
<div className="flex-1 h-[350px] relative lg:hidden">
  <Image
    src={"/assets/analyst-post.avif"}
    alt="Image"
    fill
    className="object-cover "
  />
</div>
</div>
<div className="flex gap-12">
<div className="flex-[5] mt-20 text-sm font-light sm:text-xs ">
  <p className="  mb-5">
    
  </p>

  <div className="">
    <Comments />
  </div>
</div>
<Menu />
</div>
</div> */
}
//
