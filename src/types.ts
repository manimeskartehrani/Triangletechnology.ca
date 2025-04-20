export interface Post {
  slug: string;
  title: string;
  date: string;
  tags?: string[];
  category?: string;
  content: string;
}

export type SitemapFile = Array<{
  url: string;
  lastModified?: string | Date | undefined;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never"
    | "undefined";
  priority?: number;
  alternates?: { href: string; hrefLang: string }[];
  images?: string[];
  videos?: unknown[];
}>;
export type Sitemap = SitemapFile[];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  updatedAt: string;
}
