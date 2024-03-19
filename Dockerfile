FROM node:21.5.0-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./
EXPOSE 8081

FROM base as builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM base as production
WORKDIR /app

ENV NODE_ENV=production
RUN yarn install --frozen-lockfile

RUN addgroup -g 1001 -S nodejs
RUN adduser -S minddaily-frontend -u 1001
USER minddaily-frontend


COPY --from=builder --chown=minddaily-frontend:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

CMD yarn start

FROM base as stage
ENV NODE_ENV=development
RUN yarn install
COPY . .
CMD yarn dev
