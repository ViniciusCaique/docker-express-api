
FROM node:20-alpine

WORKDIR /usr/code

COPY package*.json ./

RUN npm install 

# -s /bin/sh gojo

# RUN adduser --home /home/gojo 

# USER gojo
# RUN whoami

COPY . . 

EXPOSE 3030

CMD ["npm", "run", "prod"]
