FROM mhart/alpine-node:7


RUN  apk update && apk upgrade \
  && apk add \
      bash \
      ca-certificates \
      chromium-chromedriver \
      chromium \
      coreutils \
      ffmpeg \
      figlet \
      ttf-freefont \
      udev \
      vim \
      xauth \
      xvfb \
  && rm -rf /tmp/* /var/cache/apk/*

RUN mkdir app
RUN cd app
WORKDIR /app

COPY ./package.json ./package.json
COPY ./helper ./helper
COPY ./lib ./lib
COPY ./index.js ./index.js

RUN npm install
