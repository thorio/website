FROM base_image AS build

WORKDIR /source/web

RUN pnpm run build

FROM node:20-alpine AS final

RUN mkdir /app
WORKDIR /app

COPY --from=build /source/web/.output /app

ENV NITRO_PORT 8080
EXPOSE 8080

CMD ["node", "/app/server/index.mjs"]
