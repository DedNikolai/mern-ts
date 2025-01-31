import { IDeck } from "../types/deck";
import { API_URL } from "./config";

export default async function createCard(deckId: string, text: string): Promise<IDeck> {
    const response = await fetch(`${API_URL}/decks/${deckId}/cards`, {
          method: 'POSt',
          body: JSON.stringify({text}),
          headers: {
            "Content-Type": "application/json"
        }
    });
    return response.json();
}