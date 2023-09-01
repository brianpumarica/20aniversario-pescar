# Adecuar el nombre de la imagen y el tag
FROM node:18

WORKDIR /app
COPY ./backend/package*.json ./
COPY ./backend/ ./
RUN npm install
COPY ./backend ./

ENV PORT 3001
EXPOSE $PORT
CMD [ "npm", "start" ]