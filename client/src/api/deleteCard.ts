import { IDeck } from "../types/deck";
import { API_URL } from "./config";

export default async function deleteCard(deckId: string, card: string): Promise<IDeck> {
    const response = await fetch(`${API_URL}/decks/${deckId}/cards/${card}`, {
          method: 'DELETE',
    });
    return response.json();
}