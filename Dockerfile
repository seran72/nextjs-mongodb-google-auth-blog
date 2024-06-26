FROM node:lts-alpine AS builder

WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install

EXPOSE 3000
CMD npm run dev
