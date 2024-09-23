FROM base_image AS build

WORKDIR /source/services/errorpages

RUN pnpm run build

FROM nginx:1.27-alpine AS final

RUN mkdir /www && rm /etc/nginx/conf.d/*
COPY --from=build /source/services/errorpages/dist/_error /www/_error
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
