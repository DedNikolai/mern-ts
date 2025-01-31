import React, { useEffect, useState } from 'react'
import './App.css';
import {useParams} from 'react-router-dom'
import createCard from './api/createCard';
import getDeck from './api/getDeck';
import { IDeck } from './types/deck';
import deleteCard from './api/deleteCard';
import Header from './Header';

export default function Deck() {
  const [cards, setCards] = useState<string[]>([]); 
  const [deck, setDeck] = useState<IDeck | null>(null); 
  const [text, setText] = useState('');
  const {id} = useParams();

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
   setText(e.target.value)
  }

  const handleCreateСrard = async (e: React.FormEvent) => {
    e.preventDefault();
    const {cards: serverCards} = await createCard(id!, text);
    setCards([...serverCards]);
    setText('');
   
  };

  const handleDeleteCard = (card: string) => {
    deleteCard(id!, card).then(result => {
        setCards(result.cards);
        setDeck(result);
    }) 
  }


  useEffect(() => {
    if (!id) return
    getDeck(id!).then(result => {
        setCards(result.cards);
        setDeck(result);
    })
  }, [id])

  return (
    <>
        <Header />
        <h1>{deck?.title}</h1>
        <div className='app'>
            <div className='form-container'>
                <form onSubmit={handleCreateСrard} className='form'>
                <label htmlFor="card-text">Card Text</label>
                <input 
                    id='card-text' 
                    type="text" 
                    onChange={onChangeTitle}
                    value={text}
                />
                <button onClick={handleCreateСrard}>Create Card</button>
                </form>
            </div>
            <ul className='cards'>
            {
                cards.map((card, index) => {
                    return (
                    <li key={card + index}>
                        <button onClick={() => handleDeleteCard(card)}>X</button>
                        {card}
                    </li>)
                })
                }
            </ul>
        </div>
    </>
  )
}