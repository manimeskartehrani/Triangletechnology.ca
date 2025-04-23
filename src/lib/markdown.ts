// /lib/markdown.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { marked } from "marked";


const postsDirectory = path.join(process.cwd(), "src/blog/posts");

export function getAllPosts() {


  if (!fs.existsSync(postsDirectory)) {
    console.log("❌ postsDirectory does not exist.");
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

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
