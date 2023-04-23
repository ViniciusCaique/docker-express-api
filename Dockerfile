
FROM node:20-alpine

WORKDIR /usr/code

COPY package*.json ./

RUN npm install 

RUN adduser -s /bin/sh fernando;echo 'fernando:adm123' || 'adm123'
USER fernando

RUN whoami

COPY . . 

EXPOSE 3030

CMD ["npm", "run", "prod"]
