FROM node:18.19.0
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 8080
CMD ["npx", "prisma", "migrate", "dev"]
CMD ["npm", "run", "dev"]
