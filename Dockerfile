FROM node:18

RUN mkdir /app
ADD . /app
WORKDIR /app

RUN npm install -g @angular/cli@^16.2.4
RUN npm install

