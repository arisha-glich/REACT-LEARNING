// hooks/useFavorites.js
import { useState } from 'react';

const useFavorites = (initialFavorites = []) => {
  const [favorites, setFavorites] = useState(initialFavorites);
  const [isListVisible, setIsListVisible] = useState(false);

  const handleFavoriteToggle = (participantName, participantList) => {
    setFavorites(prevFavorites => {
      const isFavorite = prevFavorites.some(participant => participant.name === participantName);
      if (isFavorite) {
        return prevFavorites.filter(participant => participant.name !== participantName);
      } else {
        const participantToAdd = participantList.find(participant => participant.name === participantName);
        return [...prevFavorites, participantToAdd];
      }
    });
  };

  const handleToggleListVisibility = () => {
    setIsListVisible(prevState => !prevState);
  };

  return {
    favorites,
    isListVisible,
    handleFavoriteToggle,
    handleToggleListVisibility
  };
};

export default useFavorites;
