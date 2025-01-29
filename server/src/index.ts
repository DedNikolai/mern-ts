import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck'

const Port = 5000;

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://DedNikolai:As541035@cluster0.ez3irsp.mongodb.net/mern-ts?retryWrites=true&w=majority')

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

mongoose.connect(
    'mongodb+srv://DedNikolai:As541035@cluster0.ez3irsp.mongodb.net/mern-ts?retryWrites=true&w=majority'
    ).then(() => {
        console.log(`Listening Port ${Port}`)
        app.listen(Port);
    })

