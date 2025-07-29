FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install

ARG PAYLOAD_SECRET
ENV PAYLOAD_SECRET=$PAYLOAD_SECRET
ARG DATABASE_URI
ENV DATABASE_URI=$DATABASE_URI
ARG SITE_URI
ENV SITE_URI=$SITE_URI

# 2. Copy code and build
COPY . .
RUN npm run build



# 3. Start app
EXPOSE 3000
CMD ["npm", "start"]
