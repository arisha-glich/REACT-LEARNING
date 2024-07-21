// ParticipantList.js
import React from 'react';
import ParticipantCard from './ParticipantCard';
import FavouriteLists from './FavouriteLists';
import './ParticipantList.css'
import useFavorites from '../../hooks/useFavorites';


function ParticipantList({ participantList }) {
  const { favorites, isListVisible, handleFavoriteToggle, handleToggleListVisibility } = useFavorites([]);

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
            onFavoriteToggle={() => handleFavoriteToggle(participant.name, participantList)}
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
