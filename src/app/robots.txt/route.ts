export const runtime = "edge";

export async function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const body = `User-agent: *
Allow: /
Disallow: /login/
Crawl-delay: 5

Sitemap: ${origin}/sitemap.xml
Host: ${origin}`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
