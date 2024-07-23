// src/App.jsx
import React from 'react';
import './App.css';
import Meetlist from './components/Meet/Meetlist';
import { FavoritesProvider } from './components/Context/FavoritesContext';
import ShowFavorites from './components/Favorite/ShowFavorites';

function App() {
  return (
    <FavoritesProvider>
      <Meetlist />
      <ShowFavorites />
    </FavoritesProvider>
  );
}

export default App;
