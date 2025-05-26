# Etapa de build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Compila Angular SSR (browser + server)
RUN npm run build

# Etapa final: usar Node para servir el SSR
FROM node:20-alpine

WORKDIR /app

# Copia los resultados del build
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json ./

# Instalás solo producción
RUN npm install --omit=dev

# Exponés el puerto donde Express sirve (por defecto: 4000)
EXPOSE 4000

# Ejecutás el servidor SSR generado
CMD ["node", "dist/riu-frontend/server/server.mjs"]