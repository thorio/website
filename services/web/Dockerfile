FROM base_image AS build

WORKDIR /source/services/web

RUN pnpm run build

FROM node:18-alpine AS final

RUN mkdir /app
WORKDIR /app

COPY --from=build /source/services/web/.output /app
COPY --from=build /source/services/web/config.yml /app/config.yml

ENV NITRO_PORT 8080
EXPOSE 8080

# TODO: support graceful shutdown via SIGINT
CMD ["node", "/app/server/index.mjs"]
