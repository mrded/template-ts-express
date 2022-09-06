ARG PORT=3000

FROM node:18-alpine3.16 AS builder
WORKDIR /app

COPY package*.json . 
RUN npm ci

COPY . .

ENV PORT=$PORT
EXPOSE $PORT

FROM builder AS development
USER node
ENV NODE_ENV=development
CMD ["./node_modules/.bin/ts-node", "src/index.ts"]

FROM builder AS production
RUN npm run build
USER node
ENV NODE_ENV=production
CMD [ "node", "dist/index.js" ]
