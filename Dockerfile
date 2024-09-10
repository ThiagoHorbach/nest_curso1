# Use uma imagem base do Node.js
FROM node:18

# Crie um diretório para a aplicação
WORKDIR /app

# Copie os arquivos de configuração do npm e o package.json para o contêiner
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Instale o Nodemon globalmente
RUN npm install -g nodemon

# Copie o restante dos arquivos da aplicação para o contêiner
COPY . .

# Exponha a porta que o NestJS usará
EXPOSE 3000

# Comando para iniciar a aplicação com Nodemon
# CMD ["nodemon", "dist/main.js"]
# CMD ["npm", "run", "start:dev"]
CMD ["nodemon", "--legacy-watch", "src/main.ts"]