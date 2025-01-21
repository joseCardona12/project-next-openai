# Usar una imagen base ligera de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar y descargar las dependencias primero (para aprovechar el caché de Docker)
COPY package.json package-lock.json ./
RUN npm install

# Copiar los archivos de Prisma
COPY prisma ./prisma/
# Generar el cliente de Prisma
RUN npx prisma generate
RUN npx prisma db seed

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto
EXPOSE 3000

# Ejecutar migraciones antes de iniciar la aplicación
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
