# Open-Jira

NextJs proyect for training drag and drop, ract contexts and hooks. The backend is developed under de api folder and it uses mongo as db.
A demo is available on
[https://open-jira-lime-seven.vercel.app/](https://open-jira-lime-seven.vercel.app/)

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
