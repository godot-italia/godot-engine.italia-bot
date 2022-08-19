FROM node

WORKDIR /usr/src/app

COPY . .

CMD [ "node", "index.js" ]

