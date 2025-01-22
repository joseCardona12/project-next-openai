# Usar una imagen base ligera de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar y descargar las dependencias primero (para aprovechar el caché de Docker)
COPY package.json package-lock.json ./
RUN npm install

# Copiar los archivos de Prisma y generar el cliente
COPY prisma ./prisma/
RUN npx prisma generate

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto
EXPOSE 3000

# Crear script de inicio
RUN echo '#!/bin/sh\n\
echo "Waiting for database..."\n\
sleep 5\n\
echo "Running migrations..."\n\
npx prisma migrate deploy\n\
echo "Running seed..."\n\
npx prisma db seed\n\
echo "Starting application..."\n\
npm start' > /docker-entrypoint.sh && chmod +x /docker-entrypoint.sh

# Ejecutar el script de inicio
CMD ["/docker-entrypoint.sh"]
