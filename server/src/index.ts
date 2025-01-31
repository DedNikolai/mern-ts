import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';
import { getDecksController } from './controllers/getDecksController';
import { createDecksController } from './controllers/createDeckController';
import { deleteDecksController } from './controllers/deleteDeckController';
import { createCardDecksController } from './controllers/createCardForDeckController copy';
import { getDeckController } from './controllers/getDeckController';
import { deleteCardDecksController } from './controllers/deleteCardForDeckController copy 2';

const Port = 5000;

const app = express();
app.use(cors({
    // origin: 'server name'
}));
app.use(express.json());

app.get('/decks', getDecksController)
app.post('/decks', createDecksController);
app.delete('/decks/:id', deleteDecksController);
app.post('/decks/:id/cards', createCardDecksController);
app.get('/decks/:id', getDeckController);
app.delete('/decks/:id/cards/:index', deleteCardDecksController);

mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log(`Listening Port ${Port}`)
        app.listen(Port);
    })

