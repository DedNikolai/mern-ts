import { Request, Response } from "express";
import Deck from "../models/Deck";

export async function getDecksController(req: Request, res: Response) {
    try {
        const decksList = await Deck.find();
        res.status(200).json(decksList);
    } catch(error) {
        console.log(error);
        res.status(400).json({message: "Error getting Decks"})
    }
}