FROM node:slim

LABEL name="rabbit-monitor"

WORKDIR /app

COPY . /app

ENV INTERVAL=900000

RUN npm install 

CMD ["node", "index.js"]