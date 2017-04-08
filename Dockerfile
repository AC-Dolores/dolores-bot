FROM zixia/wechaty

RUN mkdir app
RUN cd app
WORKDIR /app

COPY ./package.json ./package.json
COPY ./helper ./helper
COPY ./lib ./lib
COPY ./index.js ./index.js

RUN npm install

#CMD /wechaty/bin/entrypoint.sh index.js
