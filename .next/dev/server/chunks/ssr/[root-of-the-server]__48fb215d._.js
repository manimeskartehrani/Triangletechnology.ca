module.exports = [
"[project]/Developer/Triangle/TTC/Triangle 2/src/app/favicon.ico.mjs { IMAGE => \"[project]/Developer/Triangle/TTC/Triangle 2/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/src/app/favicon.ico.mjs { IMAGE => \"[project]/Developer/Triangle/TTC/Triangle 2/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Developer/Triangle/TTC/Triangle 2/src/app/blog/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/src/app/blog/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/src/lib/markdown.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// /lib/markdown.ts
__turbopack_context__.s([
    "getAllPosts",
    ()=>getAllPosts,
    "getPostBySlug",
    ()=>getPostBySlug,
    "parseMarkdown",
    ()=>parseMarkdown
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/gray-matter/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/marked/lib/marked.esm.js [app-rsc] (ecmascript)");
;
;
;
;
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
const postsDirectory = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "src/blog/posts");
function getAllPosts() {
    console.log("Reading posts from:", postsDirectory);
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(postsDirectory)) {
        console.log("❌ postsDirectory does not exist.");
        return [];
    }
    const fileNames = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(postsDirectory);
    console.log("Found files:", fileNames);
    const posts = fileNames.filter((file)=>file.endsWith(".md")).map((fileName)=>{
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(postsDirectory, fileName);
        const fileContents = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(fullPath, "utf8");
        const { data, content } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(fileContents);
        return {
            slug: fileName.replace(/\.md$/, ""),
            title: data.title || "Untitled",
            date: data.date || "Unknown date",
            content
        };
    });
    return posts;
}
function getPostBySlug(slug) {
    const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(postsDirectory, `${slug}.md`);
    const fileContents = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(fullPath, "utf8");
    const { data, content } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(fileContents);
    return {
        slug,
        title: data.title,
        date: data.date,
        content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["marked"])(content)
    };
}
const parseMarkdown = (filePath)=>{
    const content = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, "utf-8");
    // Parse the markdown file to extract front matter and content
    const { data, content: mdContent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(content);
    // Convert markdown content to HTML
    const htmlContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["marked"])(mdContent);
    return {
        title: data.title || "Untitled",
        date: data.date || "Unknown",
        content: htmlContent
    };
};
}),
"[project]/Developer/Triangle/TTC/Triangle 2/src/components/BlogCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const BlogCard = ({ post })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-lg shadow-lg text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4",
                children: post.title
            }, void 0, false, {
                fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/BlogCard.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-sm mb-6",
                children: post.date
            }, void 0, false, {
                fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/BlogCard.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                dangerouslySetInnerHTML: {
                    __html: post.content.slice(0, 200)
                }
            }, void 0, false, {
                fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/BlogCard.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: `/blog/${post.slug}`,
                className: "text-blue-500 mt-4 inline-block",
                children: "Read More"
            }, void 0, false, {
                fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/BlogCard.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/BlogCard.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BlogCard;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/src/app/blog/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// /app/blog/page.tsx
__turbopack_context__.s([
    "default",
    ()=>BlogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$src$2f$lib$2f$markdown$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/src/lib/markdown.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$src$2f$components$2f$BlogCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/src/components/BlogCard.tsx [app-rsc] (ecmascript)");
;
;
;
async function BlogPage() {
    const posts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$src$2f$lib$2f$markdown$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllPosts"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "container py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold mb-10",
                children: "Our Blog"
            }, void 0, false, {
                fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/app/blog/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                children: posts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "No blog posts found."
                }, void 0, false, {
                    fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/app/blog/page.tsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this) : posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$src$2f$components$2f$BlogCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        post: post
                    }, post.slug, false, {
                        fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/app/blog/page.tsx",
                        lineNumber: 15,
                        columnNumber: 31
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/app/blog/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/app/blog/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Triangle/TTC/Triangle 2/src/app/blog/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/src/app/blog/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__48fb215d._.js.map