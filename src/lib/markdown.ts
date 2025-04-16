// /lib/markdown.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types"; // Import the Post type
import { marked } from "marked";

// export function getAllPosts(): Post[] {
//   const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));

//   const posts: Post[] = files.map((filename) => {
//     const filePath = path.join(postsDir, filename);
//     const fileContents = fs.readFileSync(filePath, "utf-8");
//     const { data, content } = matter(fileContents);

//     const slug = filename.replace(/\.md$/, "");

//     return {
//       slug,
//       title: data.title || "", // Ensure that title exists
//       date: data.date || "", // Ensure that date exists
//       tags: data.tags || [], // Ensure that tags exists
//       category: data.category || "", // Ensure category exists
//       content,
//     };
//   });

//   return posts.sort(
//     (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
//   );
// }

const postsDirectory = path.join(process.cwd(), "src/blog/posts");

export function getAllPosts() {
//   console.log("Reading posts from:", postsDirectory);

  if (!fs.existsSync(postsDirectory)) {
    console.log("❌ postsDirectory does not exist.");
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
//   console.log("Found files:", fileNames);

  const posts = fileNames
    .filter((file) => file.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: fileName.replace(/\.md$/, ""),
        title: data.title || "Untitled",
        date: data.date || "Unknown date",
        content,
      };
    });

  return posts;
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    content: marked(content),
  };
}

export const parseMarkdown = (filePath: string) => {
  const content = fs.readFileSync(filePath, "utf-8");

  // Parse the markdown file to extract front matter and content
  const { data, content: mdContent } = matter(content);

  // Convert markdown content to HTML
  const htmlContent = marked(mdContent);

  return {
    title: data.title || "Untitled", // Default title if not found
    date: data.date || "Unknown", // Default date if not found
    content: htmlContent,
  };
};
