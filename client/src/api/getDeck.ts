import { IDeck } from "../types/deck";
import { API_URL } from "./config";

export default async function getDeck(id: string): Promise<IDeck> {
    const response = await fetch(`${API_URL}/decks/${id}`);
    const deck = await response.json();
    return deck;
}