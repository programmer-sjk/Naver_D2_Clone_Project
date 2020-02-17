FROM node:12.2.0-alpine
MAINTAINER Seo, JeongKuk

RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

RUN npm install --no-cache
RUN npm install react-scripts@3.4.0 -g
RUN apk add --no-cache git

COPY . /app
CMD ["npm", "start"]