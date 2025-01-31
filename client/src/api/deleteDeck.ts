import { API_URL } from "./config";

export default async function deleteDeck(id: string) {
    await fetch(`${API_URL}/decks/${id}`, {
        method: 'DELETE',
      })
}