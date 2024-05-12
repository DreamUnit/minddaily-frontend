FROM node:21.5.0-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
RUN apk add --no-cache git
WORKDIR /app
COPY package*.json ./
EXPOSE 8083

FROM base as builder
WORKDIR /app
COPY . .

# Accept NEXT_PUBLIC_APP_SERVER_URL as a build argument and set it as an environment variable
ARG NEXT_PUBLIC_APP_SERVER_URL
ENV NEXT_PUBLIC_APP_SERVER_URL=$NEXT_PUBLIC_APP_SERVER_URL

RUN yarn install
RUN yarn build

FROM base as stage
WORKDIR /app

ENV NODE_ENV=stage
RUN yarn install

RUN addgroup -g 1001 -S nodejs
RUN adduser -S minddaily-frontend -u 1001
USER minddaily-frontend

COPY --from=builder --chown=minddaily-frontend:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

EXPOSE 8083

ENV PORT 8083
ENV HOSTNAME "0.0.0.0"

CMD yarn start -p 8083