FROM node:21.5.0-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
RUN apk add --no-cache git
WORKDIR /app
COPY package*.json ./
EXPOSE 8081

FROM base as builder
ARG NEXT_PUBLIC_APP_SERVER_URL
ARG NODE_ENV

ENV NEXT_PUBLIC_APP_SERVER_URL=$NEXT_PUBLIC_APP_SERVER_URL
ENV NODE_ENV=$NODE_ENV

COPY . .
RUN yarn install
RUN yarn build

FROM base as production
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S minddaily-frontend -u 1001
USER minddaily-frontend

EXPOSE 8081

ENV PORT 8081
ENV HOSTNAME "0.0.0.0"

CMD ["yarn", "start", "-p", "8081"]
