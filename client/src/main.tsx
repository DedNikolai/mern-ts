import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import Deck from './Deck.tsx';
import Header from './Header.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },

  {
    path: '/decks/:id',
    element: <Deck />
  }
])

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
  </>
,
)
