import { API_URL } from "./config";

export default async function createDeck(title: string) {
    await fetch(`${API_URL}/decks`, {
          method: 'POSt',
          body: JSON.stringify({title}),
          headers: {
            "Content-Type": "application/json"
        }
    });
}