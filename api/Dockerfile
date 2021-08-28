FROM node:14.17.5-alpine3.14
# FROM node:lts-alpine3.14 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# EXPOSE 3000
# CMD ["node", "run start"]