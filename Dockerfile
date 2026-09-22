FROM node:20-alpine

RUN apk add --no-cache git ffmpeg imagemagick python3 make g++

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
