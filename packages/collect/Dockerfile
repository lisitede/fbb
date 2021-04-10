FROM node:12.16.3-buster

ENV ADBLOCK=true
ENV DISABLE_OPENCOLLECTIVE=true

RUN mkdir -p /var/app
WORKDIR /var/app
EXPOSE 7001

COPY /src /var/app/src
COPY package.json /var/app/package.json
COPY tsconfig.json /var/app/tsconfig.json

RUN cd /var/app && npm install --production --no-optional --no-package-lock && \
    npm run build

CMD ["npm", "run", "start"]
