
FROM node:20-alpine

WORKDIR /usr/code

COPY package*.json ./

RUN npm install 

COPY . . 

EXPOSE 3030

CMD ["npm", "run", "prod"]
