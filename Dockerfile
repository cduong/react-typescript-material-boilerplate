FROM node:16

RUN yarn set version berry
WORKDIR /code

COPY package.json /code/
RUN yarn install

COPY .  /code
CMD yarn start