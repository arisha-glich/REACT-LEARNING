// src/components/Meet/ParticipantList.js
import React from 'react';
import ParticipantCard from './ParticipantCard';
import '../../styles/ParticipantList.css';
import { useFavorites } from '../Context/FavoritesContext';

function ParticipantList({ participantList }) {
  const { favorites, handleFavoriteToggle } = useFavorites();

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
            onFavoriteToggle={() =>
              handleFavoriteToggle(participant.name, participantList)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default ParticipantList;
