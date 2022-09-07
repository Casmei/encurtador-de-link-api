FROM node:lts-alpine AS base
  RUN mkdir -p /usr/src/app && chown node:node /usr/src/app

  WORKDIR /usr/src/app

  USER node

  COPY --chown=node:node ./package*.json ./

  RUN npm install

  COPY --chown=node:node . .

  EXPOSE 3000

  CMD [ "node", "./bin/www" ]
