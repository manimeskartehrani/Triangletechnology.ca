// next.config.mjs
console.log("✅ next.config.mjs loaded");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Find Next's built-in rule that handles static assets (including svg)
    const assetRule = config.module.rules.find(
      (rule) => rule?.test instanceof RegExp && rule.test.test(".svg")
    );

    if (assetRule) {
      assetRule.exclude = /\.svg$/i;
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
