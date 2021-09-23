FROM node:16

WORKDIR /code
COPY package.json /code/

RUN yarn install

COPY .  /code
CMD yarn start