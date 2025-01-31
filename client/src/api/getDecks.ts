import { IDeck } from "../types/deck";
import { API_URL } from "./config";

export default async function getDecks(): Promise<IDeck[]> {
    const response = await fetch(`${API_URL}/decks`);
    const decks = await response.json();
    return decks;
}