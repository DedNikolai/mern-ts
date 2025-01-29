import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck';
import 'dotenv/config';

const Port = 5000;

const app = express();
app.use(express.json());

app.post('/decks', async (req: Request, res: Response) => {
    try {
        const {title} = req.body;
        const newDeck = new Deck({title});
        const createdDeck = await newDeck.save();
        res.status(200).json(createdDeck)
    } catch(error) {
        console.log(error);
        res.status(400).json({message: "Error creating Deck"})
    }

})

mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log(`Listening Port ${Port}`)
        app.listen(Port);
    })

