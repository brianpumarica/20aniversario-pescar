# Adecuar el nombre de la imagen y el tag
FROM node:18

WORKDIR /app

COPY ./backend/package*.json /app/
RUN npm install

# Instala nodemon globalmente
RUN npm install -g nodemon

COPY ./backend/ /app/

ENV PORT 3001
EXPOSE $PORT
CMD [ "npm", "start" ]