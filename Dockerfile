# ---- deps ----
    FROM oven/bun:1 AS deps
    WORKDIR /app
    COPY package.json bun.lockb* ./
    RUN bun install --frozen-lockfile
    
    # ---- build ----
    FROM oven/bun:1 AS build
    WORKDIR /app
    COPY --from=deps /app/node_modules ./node_modules
    COPY . .
    RUN bun run build
    
    # ---- runner ----
    FROM oven/bun:1 AS runner
    WORKDIR /app
    ENV NODE_ENV=production
    ENV PORT=3000
    COPY --from=build /app ./
    EXPOSE 3000
    CMD ["bun", "run", "start"]
    