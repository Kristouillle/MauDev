FROM node:20-slim

WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY dist ./dist

USER node
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
