FROM node:18-alpine

WORKDIR /app

COPY . .

RUN rm -rf node_modules

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm@latest && \
    pnpm install

COPY .env ./

# Asegúrate de que el contenedor de la base de datos esté en funcionamiento antes de ejecutar las migraciones
RUN /bin/sh -c "until nc -z -v -w30 postgres 5432; do echo 'Waiting for database connection...'; sleep 1; done"

# Ejecuta las migraciones de Prisma
RUN pnpx prisma migrate dev --name init

# Compila el proyecto
RUN pnpm run build

CMD ["pnpm", "start"]
