/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
=======
  productionBrowserSourceMaps: true,
  turbopack: {},
>>>>>>> 8316e08 (Fix: Logo Component)
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
        use: ["@svgr/webpack"],
      },

      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
