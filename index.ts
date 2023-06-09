import express, { Express, Request, Response } from 'express';
const app: Express = express();

app.get('/', (request: Request, response: Response) => {
    response.send('Express + Typescript running!');
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});
