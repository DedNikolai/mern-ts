import React, { useEffect, useState } from 'react'
import './App.css';
import {Link} from 'react-router-dom';
import getDecks from './api/getDecks';
import createDeck from './api/createDeck';
import deleteDeck from './api/deleteDeck';
import { IDeck } from './types/deck';
import Header from './Header';

function App() {
  const [title, setTitle] = useState('')
  const [decks, setDecks] = useState<IDeck[]>([]);
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
   setTitle(e.target.value)
  }

  const handleCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    createDeck(title).then( async () => {
      const decks = await getDecks();
      setDecks(decks)
      setTitle('')
    });
    
  };

  const handleDeleteDeck = (id: string) => {
    deleteDeck(id).then( async () => {
      const decks = await getDecks();
      setDecks(decks);
    });
  };

  useEffect(() => {
    getDecks().then(result => setDecks(result));
  }, [])

  return (
    <>
      <Header />
      <h1>Decks</h1>
      <div className='app'>
        <div className='form-container'>
          <form className='form'>
            <label htmlFor="deck-title">Deck Title</label>
            <input 
              id='deck-title' 
              type="text" 
              onChange={onChangeTitle}
              value={title}
            />
            <button onClick={handleCreateDeck}>Create Deck</button>
          </form>
        </div>
        <ul className='decks'>
          {
            decks.map((deck) => {
              return (
                <li key={deck._id}>
                  <button onClick={() => handleDeleteDeck(deck._id)}>X</button>
                  <Link to={`/decks/${deck._id}`}>{deck.title}</Link>
                </li>)
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
