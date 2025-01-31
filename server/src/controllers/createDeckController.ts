import { Request, Response } from "express";
import Deck from "../models/Deck";

export async function createDecksController(req: Request, res: Response) {
    try {
        const {title} = req.body;
        const newDeck = new Deck({title});
        const createdDeck = await newDeck.save();
        res.status(200).json(createdDeck)
    } catch(error) {
        console.log(error);
        res.status(400).json({message: "Error creating Deck"})
    }

}