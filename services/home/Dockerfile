FROM base_image AS build

WORKDIR /source/services/home

RUN pnpm run build

FROM node:20-alpine AS final

RUN mkdir /app
WORKDIR /app

COPY --from=build /source/services/home/.output /app
COPY --from=build /source/services/home/config.yml /app/config.yml

ENV NITRO_PORT 8080
EXPOSE 8080

# TODO: support graceful shutdown via SIGINT
CMD ["node", "/app/server/index.mjs"]
