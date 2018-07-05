FROM node:8.9.3

RUN mkdir app

COPY . /app

WORKDIR /app

RUN npm install --silent

CMD ["yarn", "run", "dev-server"]
