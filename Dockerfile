FROM node:alpine

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

ENV MYSQL_CONNECTION_STRING=Server=[azure-server-host:port];Database=contosodb;Uid=contoso;Pwd=spaces;

EXPOSE 80

CMD npm run start
