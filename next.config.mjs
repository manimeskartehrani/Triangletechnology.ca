// next.config.mjs
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Extensions
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  output: "standalone",
  experimental: {
    mdxRs: true,
  },

  // 2. Webpack for SVGs
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|jsx|tsx|mdx)$/] },
      use: ["@svgr/webpack"],
    });

    return config;
  },

  reactStrictMode: true,
};

// 3. Define withMDX separately
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@/components/mdx-components.tsx",
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

// 4. Wrap and export
export default withMDX(nextConfig);
