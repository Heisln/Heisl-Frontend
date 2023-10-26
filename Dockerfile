FROM node:12.13-alpine AS build
WORKDIR /app
RUN apk add --no-cache chromium
COPY frontend/package*.json /app/
RUN npm install -g @ionic/cli
RUN npm ci
COPY frontend/ /app/

FROM build AS prod
RUN ionic build --prod

FROM nginx:1.25.3-alpine
COPY nginx_default_site.conf /etc/nginx/conf.d/default.conf
COPY --from=prod /app/www/ /usr/share/nginx/html/