// src/components/Context/FavoritesContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
  //Get favorites and visibility state to Local Storage
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log("Loaded favorites from local storage:", storedFavorites);
    return storedFavorites;
  });

  const [isListVisible, setIsListVisible] = useState(() => {
    const storedVisibility = JSON.parse(localStorage.getItem('isListVisible'));
    console.log("Loaded visibility state from local storage:", storedVisibility);
    return storedVisibility !== null ? storedVisibility : true;
  });

  //Set favorites and visibility state to Local Storage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log("Saved favorites to local storage:", favorites);
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('isListVisible', JSON.stringify(isListVisible));
    console.log("Saved visibility state to local storage:", isListVisible);
  }, [isListVisible]);

  
//Checks whether card is fav or not
  const handleFavoriteToggle = (participantName, participantList) => {
    setFavorites(prevFavorites =>
      prevFavorites.some(fav => fav.name === participantName)
        ? prevFavorites.filter(fav => fav.name !== participantName)
        : [...prevFavorites, participantList.find(p => p.name === participantName)]
    );
  };
//Check Visibiity 
  const handleToggleListVisibility = () => {
    setIsListVisible(prevVisibility => !prevVisibility);
  };

//This function resets all the favourites
  const resetFavorites = () => {
    setFavorites([]);
    localStorage.setItem('favorites', JSON.stringify([])); 
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isListVisible,
        handleFavoriteToggle,
        handleToggleListVisibility,
        resetFavorites
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
