FROM node:16.15-alpine
WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN apk --no-cache add --virtual builds-deps build-base python3
RUN yarn install --production=true
RUN yarn global add pm2

COPY . .
EXPOSE 5001

CMD ["pm2,", "--name", "back-server", "start", "yarn", "--", "start"]