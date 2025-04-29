import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const origin = req.nextUrl.origin;
  const content = `User-agent: *
Allow: /
Disallow: /login/
Crawl-delay: 5

Sitemap: ${origin}/sitemap.xml
Host: ${origin}`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain" },
  });
}
