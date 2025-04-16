const BlogCard = ({
    post,
  }: {
    post: { title: string; date: string; content: string; slug: string };
  }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg text-black">
        <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
        <p className="text-gray-500 text-sm mb-6">{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content.slice(0, 200) }} />
        <a
          href={`/blog/${post.slug}`}
          className="text-blue-500 mt-4 inline-block"
        >
          Read More
        </a>
      </div>
    );
  };
  
  export default BlogCard;
  