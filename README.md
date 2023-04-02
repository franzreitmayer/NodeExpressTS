# NodeExpressTS
Simple TypeScript with express and node

# How to setup Simple express application with TypeScript


## Initialize Node Project

```bash
npm init
```

## Install express
```bash
npm install express
```

## Install TypeScript and typing informations
```bash
Npm i -D typescript @types/express @types/node
```

## Set outDir in tsconfig.json
```json
"outDir": "./dist",
```

## Update the package.json in order to work with typescript utilities
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx tsc",
    "start": "node dist/index.js"
    },
```

## Create simple express application
```typescript
import express, { Express, Request, Response } from 'express';
const app: Express = express();
app.get('/', (request: Request, response: Response) => {
    response.send('Express + Typescript running!');
});
app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});
```

## Build the project
```bash
npm run build
```

## Run the project
```bash
npm run start
```


