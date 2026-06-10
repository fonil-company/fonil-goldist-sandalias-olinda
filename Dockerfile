FROM node:22 AS builder

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:22-slim

WORKDIR /app

COPY --from=builder /app/.output ./.output

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/',(r)=>process.exit(r.statusCode<500?0:1)).on('error',()=>process.exit(1))"

CMD ["node", ".output/server/index.mjs"]
