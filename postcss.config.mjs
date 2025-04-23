/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {}, // ✅ correct Tailwind PostCSS plugin for v4
    // autoprefixer: {}, // ✅ required for browser compatibility
  },
};

export default config;
