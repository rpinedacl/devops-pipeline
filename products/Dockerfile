FROM node:18
## ubicacion base en la maquina linux
WORKDIR /home/node/app

# Copiamos los 2 archivos package*.json
COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

#COPY app.js app.js
#COPY server.js server.js
#COPY package.json package.json
#COPY package-lock.json package-lock.json
#RUN npm install express
#RUN npm install --save-dev eslint-plugin-jest
#CMD ["node", "server.js"]
#CMD ["node", "app.js"]