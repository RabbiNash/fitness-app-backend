FROM node:lts as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
COPY tsconfig*.json  ./

RUN npm ci

COPY . .

RUN npm run build

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 8000
CMD [ "node", "dist/src/index.js" ]