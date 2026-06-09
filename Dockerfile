FROM node:22-alpine AS builder

WORKDIR /app

# Copiar arquivos de dependência primeiro (melhor cache)
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

# Copiar o resto do código
COPY . .

# Build do projeto
RUN npm run build

# ---- Produção ----
FROM node:22-alpine

WORKDIR /app

# Copiar toda a saída do build
COPY --from=builder /app/.output ./.output

# Variáveis de ambiente para o servidor
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

# Verificação de saúde
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Iniciar o servidor
CMD ["node", ".output/server/index.mjs"]
