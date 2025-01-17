# Etapa 1: Build
FROM node:22.12.0 AS builder

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /project-next-openai

# Copiar archivos necesarios para instalar dependencias
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el proyecto al contenedor
COPY . .

# Construir la aplicación (Next.js generará la carpeta `.next`)
RUN npm run build

# Etapa 2: Producción
FROM node:22.12.0

# Establecer el directorio de trabajo para producción
WORKDIR /project-next-openai

# Copiar los archivos necesarios desde la etapa de build
COPY --from=builder /project-next-openai/package.json /project-next-openai/package-lock.json ./
COPY --from=builder /project-next-openai/.next ./.next
COPY --from=builder /project-next-openai/public ./public
COPY --from=builder /project-next-openai/node_modules ./node_modules

# Exponer el puerto que utiliza Next.js
EXPOSE 3000

# Comando para ejecutar la aplicación en producción
CMD ["npm", "run", "start"]
