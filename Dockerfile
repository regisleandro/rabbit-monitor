FROM node:slim

LABEL name="rabbit-monitor"

WORKDIR /app

COPY . /app

ENV INTERVAL=900000

RUN npm install 

RUN useradd -u 1002 -ms /bin/bash user
RUN chown user:user -R /app
USER user

CMD ["node", "index.js"]