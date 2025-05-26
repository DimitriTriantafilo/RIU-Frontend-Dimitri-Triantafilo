# Etapa de build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .


RUN npm run build


FROM node:20-alpine

WORKDIR /app


COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json ./


RUN npm install --omit=dev


EXPOSE 4000


CMD ["node", "dist/riu-frontend/server/server.mjs"]