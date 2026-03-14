# Build
FROM node:23 AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

# Runtime SSR
FROM node:23
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

USER node
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
