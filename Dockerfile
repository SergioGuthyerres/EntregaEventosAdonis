# =============================================================================
# Controle de Eventos API — Dockerfile multi-stage
#
#   Estágio 1 (deps)       -> instala TODAS as dependências (inclui dev/TypeScript)
#   Estágio 2 (build)      -> compila o TypeScript do AdonisJS para JavaScript
#   Estágio 3 (production) -> imagem final enxuta: só JS compilado + deps de produção
#
# Por que multi-stage? O compilador TypeScript, ESLint, Prettier etc. ficam nos
# estágios intermediários e NÃO vão para a imagem final (menor e mais segura).
# =============================================================================

# Imagem base oficial, versão fixada (AdonisJS v7 exige Node >= 24).
# Alpine = distribuição mínima (~5 MB), reduz tamanho e superfície de ataque.
FROM node:24-alpine AS base
WORKDIR /app


# ---------- Estágio 1: dependências ----------
FROM base AS deps
# Copiamos SÓ os manifestos primeiro: enquanto package*.json não mudar,
# o Docker reaproveita o cache desta camada e não reinstala tudo a cada build.
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund


# ---------- Estágio 2: build ----------
FROM deps AS build
COPY . .
# Gera a pasta /app/build com o código JavaScript pronto para produção
RUN node ace build


# ---------- Estágio 3: produção ----------
FROM base AS production

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3333

# Instala apenas as dependências de produção (sem devDependencies)
COPY --from=build /app/build/package.json /app/build/package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund && npm cache clean --force

# Copia apenas o código compilado; os arquivos passam a pertencer ao usuário "node"
COPY --from=build --chown=node:node /app/build ./

# Segurança: o processo NÃO roda como root.
# A imagem node:alpine já traz o usuário sem privilégios "node" (uid 1000).
USER node

# Documenta a porta em que a aplicação escuta DENTRO do container
EXPOSE 3333

# O Docker verifica periodicamente se a API responde (e se alcança o banco).
# Usa o próprio Node (fetch nativo), sem depender de curl/wget na imagem.
HEALTHCHECK --interval=15s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+process.env.PORT+'/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

# Ao iniciar: aplica as migrations (cria/atualiza as tabelas) e sobe o servidor.
# "exec" faz o Node virar o PID 1 e receber o SIGTERM do "docker compose down".
CMD ["sh", "-c", "node ace migration:run --force && exec node bin/server.js"]
