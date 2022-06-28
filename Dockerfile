FROM node:16.15-alpine
WORKDIR /usr/src/app

COPY dist/ .

COPY package.json .
COPY yarn.lock .

ENV NODE_ENV production

RUN apk --no-cache add --virtual builds-deps build-base python3
RUN yarn

EXPOSE 5001

CMD ["yarn", "start"]