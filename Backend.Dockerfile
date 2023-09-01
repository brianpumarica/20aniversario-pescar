# Adecuar el nombre de la imagen y el tag
FROM node:18

WORKDIR /app
RUN ls /app/backend
COPY ./backend/package*.json /app/
COPY ./backend/ /app/
RUN ls /app/backend
RUN npm install
RUN ls /app/backend

ENV PORT 3001
EXPOSE $PORT
CMD [ "npm", "start" ]