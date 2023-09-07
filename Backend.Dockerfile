# Adecuar el nombre de la imagen y el tag
FROM node:18

WORKDIR /app
COPY ./backend/package*.json ./
RUN npm install
COPY ./backend ./

ENV PORT 8082
EXPOSE 8082
CMD [ "node", "server.js" ]
