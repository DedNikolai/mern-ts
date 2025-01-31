import { Request, Response } from "express";
import Deck from "../models/Deck";

export async function deleteCardDecksController(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const cadr = req.params.index;
        const deck = await Deck.findById(id);
        if (!deck) {
            res.status(400).json({message: "Deck not found"});
            return;
        }

        deck.cards.splice(parseInt(cadr), 1);
        const updatedDeck =  await deck.save();
        res.json(updatedDeck);

    } catch(error) {
        console.log(error);
        res.status(400).json({message: "Error deleting Deck"})
    }

}