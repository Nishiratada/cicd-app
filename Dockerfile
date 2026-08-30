FROM node:latest
WORKDIR /usr/src/app
CPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8888
ENV NODE_ENV=production
CMD ["node", "app.js"]
