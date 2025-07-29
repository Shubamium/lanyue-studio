FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install

# 2. Copy code and build
COPY . .
RUN npm run build

# 3. Start app
EXPOSE 3000
CMD ["npm", "start"]