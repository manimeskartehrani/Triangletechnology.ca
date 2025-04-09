module.exports = {
  apps: [
    {
      name: "triangle",
      script: "bun run build && bun run start",
      watch: ["pages", "components", "sections","app", "hooks", "lib", "providers"],
      ignore_watch: ["node_modules", ".next"],
      autorestart: true,
      instances: 1,
      exec_mode: "fork",
    },
  ],
};
