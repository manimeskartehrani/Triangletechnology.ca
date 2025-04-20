// app/robots.txt/route.ts
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const origin = req.nextUrl.origin;
  const content = `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain" },
  });
}
