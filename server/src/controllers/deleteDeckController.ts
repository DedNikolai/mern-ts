import { Request, Response } from "express";
import Deck from "../models/Deck";

export async function deleteDecksController(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const card = req.params.index;
        await Deck.findByIdAndDelete(id)
        res.status(200).json({message: 'Deck was deleted'})
    } catch(error) {
        console.log(error);
        res.status(400).json({message: "Error deleting Deck"})
    }
}