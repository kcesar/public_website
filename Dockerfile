# syntax=docker/dockerfile:1
#
# Container image for deploying the site (e.g. to Fly.io) off the Next.js
# `output: 'standalone'` build. Not used by the Azure/Vercel pipelines.

# ---- Build ----
FROM oven/bun:1 AS build
WORKDIR /app

# Install deps against the committed lockfile
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Build. VERCEL is unset here, so next.config.js uses distDir "build" and emits
# the standalone server under build/standalone (see CLAUDE.md config notes).
COPY . .
RUN bun run build

# ---- Runtime ----
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080

# Standalone server + its traced node_modules (server.js lands at /app/server.js)
COPY --from=build /app/build/standalone ./
# Static assets and public/ are NOT included in standalone — copy them alongside
COPY --from=build /app/build/static ./build/static
COPY --from=build /app/public ./public

# Next 15 needs sharp for runtime image optimization; it isn't a project
# dependency, so install it into the runtime image only.
RUN npm install --no-save sharp && npm cache clean --force

EXPOSE 8080
# Force HOSTNAME=0.0.0.0 at start: Next's standalone server binds to $HOSTNAME,
# and the Fly/Docker runtime otherwise sets HOSTNAME to the machine id, which
# makes the server bind to a bogus address and be unreachable by the proxy.
CMD ["sh", "-c", "HOSTNAME=0.0.0.0 exec node server.js"]
