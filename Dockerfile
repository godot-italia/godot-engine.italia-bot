FROM node

WORKDIR /usr/src/app

COPY . .

CMD [ "node", "ge-it-bot.js" ]

