// not using it RIGHTNOW
import { useState } from 'react';

const useFavorites = (initialFavorites = []) => {
  const [favorites, setFavorites] = useState(initialFavorites);
  const [isListVisible, setIsListVisible] = useState(false);

  
  const handleFavoriteToggle = (participantName, participantList) => {
    setFavorites(prevFavorites => {//Check if Participant is Already a Favorite:
      const isFavorite = prevFavorites.some(participant => participant.name === participantName);
      if (isFavorite) {//If the participant is already a favorite (isFavorite is true)
        return prevFavorites.filter(participant => participant.name !== participantName);
      } else {//If the participant is not a favorite (isFavorite is false)
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
