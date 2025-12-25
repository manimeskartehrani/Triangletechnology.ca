// src/lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO-ish string you control
  description?: string;
  updatedAt: string; // always valid ISO for sorting fallback if you want
};

function isValidDateString(input: string) {
  // Accept "YYYY-MM-DD" or any string Date can parse reliably.
  // (Keep it strict if you want: /^\d{4}-\d{2}-\d{2}$/)
  const ms = Date.parse(input);
  return Number.isFinite(ms);
}

function formatISODateFromStat(fullPath: string) {
  return fs.statSync(fullPath).mtime.toISOString();
}

export function getPostSlugs() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.(mdx|md)$/, ""));
}

export function getPostSource(slug: string) {
  const mdxPath = path.join(POSTS_DIR, `${slug}.mdx`);
  const mdPath = path.join(POSTS_DIR, `${slug}.md`);

  let fullPath = "";
  if (fs.existsSync(mdxPath)) fullPath = mdxPath;
  else if (fs.existsSync(mdPath)) fullPath = mdPath;
  else return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const title = typeof data.title === "string" ? data.title.trim() : "";
  const date = typeof data.date === "string" ? data.date.trim() : "";
  const description =
    typeof data.description === "string" ? data.description.trim() : undefined;

  const updatedAt =
    typeof data.updatedAt === "string" && isValidDateString(data.updatedAt)
      ? new Date(data.updatedAt).toISOString()
      : formatISODateFromStat(fullPath);

  // Enforce required fields:
  const problems: string[] = [];
  if (!title) problems.push(`missing "title"`);
  if (!date) problems.push(`missing "date"`);
  if (date && !isValidDateString(date))
    problems.push(`invalid "date" (${JSON.stringify(date)})`);

  if (problems.length) {
    // Fail fast so you fix the post, not “debug production”.
    throw new Error(
      `[blog] Invalid frontmatter in ${path.relative(process.cwd(), fullPath)}: ${problems.join(
        ", "
      )}`
    );
  }

  const meta: PostMeta = {
    slug,
    title,
    date: new Date(date).toISOString(), // normalize
    description,
    updatedAt,
  };

  return { meta, content };
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => getPostSource(slug)?.meta ?? null)
    .filter((meta): meta is PostMeta => Boolean(meta))
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}
