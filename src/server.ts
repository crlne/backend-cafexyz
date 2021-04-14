import express from 'express';
import './database/connection'
import core from 'cors'

const app = express();

app.use(express.json());

app.get('/products', (request, response) => {
    return response.json({ message: 'Hello, you made it work!' });
});

app.listen(3333);