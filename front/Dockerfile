FROM node:16.15 as builder

WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
COPY .env .

ENV NODE_ENV production

RUN yarn

WORKDIR /usr/src/app/build
COPY ./build .

FROM nginx:latest
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]