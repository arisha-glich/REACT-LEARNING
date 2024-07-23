// src/components/Context/FavoritesContext.js
import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();  // Context is created here

export const useFavorites = () => {
  return useContext(FavoritesContext);   // Custom hook to use the context
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [isListVisible, setIsListVisible] = useState(true);

  const handleFavoriteToggle = (participantName, participantList) => {
    setFavorites(prevFavorites =>
      prevFavorites.some(fav => fav.name === participantName)
        ? prevFavorites.filter(fav => fav.name !== participantName)
        : [...prevFavorites, participantList.find(p => p.name === participantName)]
    );
  };

  const handleToggleListVisibility = () => {
    setIsListVisible(prevVisibility => !prevVisibility);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isListVisible,
        handleFavoriteToggle,
        handleToggleListVisibility
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
