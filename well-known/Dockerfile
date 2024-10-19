FROM nginx:1.27-alpine AS final

RUN mkdir /www && rm /etc/nginx/conf.d/*
COPY ./src /www/.well-known
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
