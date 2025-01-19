# Usar una imagen base
FROM node:18-alpine

# Crear directorio de la app
WORKDIR /app

# Copiar dependencias
COPY package.json package-lock.json ./
COPY prisma ./prisma/
RUN npm install
RUN npx prisma generate

# Copiar el código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]