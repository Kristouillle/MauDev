# ===========================
# Build stage
# ===========================
FROM node:24 AS builder
WORKDIR /app

# Installer les dépendances
COPY package.json package-lock.json ./
RUN npm ci

ARG ASTRO_DB_REMOTE_URL
ARG ASTRO_DB_APP_TOKEN
ARG PUBLIC_GA_ID
ARG PUBLIC_SITE

ENV ASTRO_DB_REMOTE_URL=${ASTRO_DB_REMOTE_URL}
ENV ASTRO_DB_APP_TOKEN=${ASTRO_DB_APP_TOKEN}
ENV PUBLIC_GA_ID=${PUBLIC_GA_ID}
ENV PUBLIC_SITE=${PUBLIC_SITE}

# Copier le code et builder
COPY . .
RUN npm run build

# ===========================
# Runtime stage
# ===========================
FROM node:24 AS runtime
WORKDIR /app

# Copier le build et node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Variables d'environnement runtime (DB + host)
ENV PUBLIC_GA_ID=${PUBLIC_GA_ID}
ENV PUBLIC_SITE=${PUBLIC_SITE}

ENV HOST=0.0.0.0
ENV PORT=4321

# User non-root
USER node
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]