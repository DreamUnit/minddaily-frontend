FROM node:20-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
RUN apk add --no-cache git
WORKDIR /app
COPY package*.json ./
RUN yarn install

FROM base as builder
ARG NEXT_PUBLIC_APP_SERVER_URL
ARG NODE_ENV

ENV NEXT_PUBLIC_APP_SERVER_URL=$NEXT_PUBLIC_APP_SERVER_URL
ENV NODE_ENV=$NODE_ENV

WORKDIR /app
COPY . .
RUN yarn build

FROM base as runtime
WORKDIR /app

RUN yarn install

RUN addgroup -g 1001 -S nodejs
RUN adduser -S minddaily-frontend -u 1001
USER minddaily-frontend

COPY --from=builder --chown=minddaily-frontend:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Default port to expose
ARG PORT=8081
ENV PORT=${PORT}

EXPOSE ${PORT}

CMD ["sh", "-c", "yarn start -p ${PORT}"]
