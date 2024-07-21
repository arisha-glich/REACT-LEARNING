import React, { useState } from 'react';
import ParticipantCard from './ParticipantCard';
import FavouriteLists from './FavouriteLists';
import './ParticipantList.css'; 

function ParticipantList({ participantList }) {
  const [favorites, setFavorites] = useState([]);
  const [isListVisible, setIsListVisible] = useState(false);

  const handleFavoriteToggle = (participantName) => {
    setFavorites(prevFavorites => {
      const isFavorite = prevFavorites.some(participant => participant.name === participantName);//Check if the Participant is Already Favorite
      if (isFavorite) {//Remove from Favorites if Already Favorite
        return prevFavorites.filter(participant => participant.name !== participantName);
      } else {//Add to Favorites if Not Already Favorite
        const participantToAdd = participantList.find(participant => participant.name === participantName);
        return [...prevFavorites, participantToAdd];
      }
    });
  };

  const handleToggleListVisibility = () => {
    setIsListVisible(prevState => !prevState);
  };

  return (
    <div>
      <div className="participant-list">
        {participantList.map((participant, index) => (
          <ParticipantCard
            key={index}
            participantName={participant.name}
            participantImage={participant.image}
            participantRole={participant.role}
            isFavorite={favorites.some(fav => fav.name === participant.name)}
            onFavoriteToggle={handleFavoriteToggle}
          />
        ))}
      </div>
      <FavouriteLists
        favorites={favorites}
        onFavoriteToggle={handleFavoriteToggle}
        isListVisible={isListVisible}
        onToggleListVisibility={handleToggleListVisibility}
      />
    </div>
  );
}

export default ParticipantList;
