import { Request, Response } from "express";
import Deck from "../models/Deck";

export async function createCardDecksController(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const deck = await Deck.findById(id);
        if (!deck) {
            res.status(400).json({message: "Deck not found"});
            return;
        }
        const {text} = req.body;
        deck.cards.push(text);
        await deck.save();
        res.json(deck);

    } catch(error) {
        console.log(error);
        res.status(400).json({message: "Error creating Deck"})
    }

}