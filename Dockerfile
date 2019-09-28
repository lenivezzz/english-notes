FROM node:lts-alpine as build-stage

WORKDIR /tmp/app

COPY package*.json ./

RUN npm i npm -g \
    && npm i --silent

COPY . .

RUN npm run build

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /tmp/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
