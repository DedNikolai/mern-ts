import { Request, Response } from "express";
import Deck from "../models/Deck";

export async function getDeckController(req: Request, res: Response) {
    try {
        const id = req.params.id
        const deck = await Deck.findById(id);
        res.status(200).json(deck);
    } catch(error) {
        console.log(error);
        res.status(400).json({message: "Error getting Decks"})
    }
}