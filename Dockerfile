FROM node:16-alpine

WORKDIR /usr/src/app

ENV CI=true

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 8080

CMD ["node", "index.js"] 