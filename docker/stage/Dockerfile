FROM node:21.5.0-alpine

RUN apk add --no-cache g++ make py3-pip libc6-compat

WORKDIR /app

COPY package*.json ./

EXPOSE 8085

ENV NODE_ENV=development

RUN yarn install --frozen-lockfile

RUN addgroup -g 1001 -S nodejs \
    && adduser -S minddaily-frontend -u 1001

USER minddaily-frontend

COPY . .

RUN yarn build

EXPOSE 8085

ENV PORT 8085
ENV HOSTNAME "0.0.0.0"

CMD yarn start -p 8085