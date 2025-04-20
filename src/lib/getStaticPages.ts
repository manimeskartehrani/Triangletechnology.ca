// lib/getStaticRoutes.ts
import fs from "fs";
import path from "path";

export function getStaticRoutes(): string[] {
  const pagesDir = path.join(process.cwd(), "/src/app"); // ← scan the real folder :contentReference[oaicite:1]{index=1}
  const routes: string[] = [];

  function walk(dir: string, base = "") {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const name = entry.name;
      const fullPath = path.join(dir, name);

      // 1) Skip special and non‑page files
      if (
        name.startsWith("_") || // _app.tsx, _document.tsx
        name === "layout.tsx" || // Next‑App Router layouts
        name === "loading.tsx" || // loading templates
        // name === "page.tsx" || // top‑level page wrappers
        name === "error.tsx" || // error boundaries
        name === "middleware.ts" || // middleware
        name === "api" || // skip API folder if scanning pages/
        name.startsWith("[") || // dynamic segments (we’ll handle them separately)
        name === "sitemap" ||
        name === "robots.txt" ||
        /\.(test|spec)\.(js|ts)x?$/.test(name) // skip tests
      ) {
        continue;
      }

      // 2) Recurse into directories
      if (entry.isDirectory()) {
        walk(fullPath, `${base}/${name}`);
        continue;
      }

      // 3) Only include page files
      if (/\.(js|jsx|ts|tsx)$/.test(name)) {
        // Drop the extension and any trailing `/page`
        let route = `${base}/${name.replace(/\.(js|jsx|ts|tsx)$/, "")}`;
        route = route.replace(/\/page$/, "") || "/";

        routes.push(route);
      }
    }
  }

  walk(pagesDir, "");
  // console.log(routes)
  return routes;
}
