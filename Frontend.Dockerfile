# Adecuar el nombre de la imagen y el tag
FROM node:18 as build-stage

WORKDIR /app
COPY ./frontend/package*.json /app/
RUN npm install --legacy-peer-deps

COPY ./frontend/ /app/

RUN npm run build

#Segunda Etapa
FROM nginx:stable-alpine
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist/ /var/www/html