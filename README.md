This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For persistent data its needed to start mongodb
```bash
docker-compose up -d
```
The connection url must be: `mongodb://localhost:27017`

## Configurar las variables de entorno

Renombrar el archivo _.env.template_ a _.env_ y rellenar.

## Poblar la bbdd para pruebas
Realizar una llamada al endpoint [http://localhost:3000/api/seed](http://localhost:3000/api/seed)


