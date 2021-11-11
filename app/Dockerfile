FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production
COPY . .

# EXPOSE 3000 # <= pointless when using compose

# idk if this is the best way to do this, but it seems to work
RUN npm install -g knex ts-node

ENTRYPOINT knex migrate:latest && npm start
