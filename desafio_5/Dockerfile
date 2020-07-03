FROM node:lts-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:lts-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist
COPY --from=development /usr/src/app/db ./dist

EXPOSE 3000
STOPSIGNAL SIGINT
CMD ["node", "dist/main"]