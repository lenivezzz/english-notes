FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm i npm -g && \
 npm i --silent

EXPOSE 8090

CMD npm run serve -- "--port=8090"
