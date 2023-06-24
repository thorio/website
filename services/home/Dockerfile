FROM base_image AS build

WORKDIR /source/services/home

RUN pnpm run build

FROM node:18-alpine AS final

RUN mkdir /app
COPY --from=build /source/services/home/.output /app

ENV NITRO_PORT 8080
EXPOSE 8080

# TODO: support graceful shutdown via SIGINT
CMD ["node", "/app/server/index.mjs"]
