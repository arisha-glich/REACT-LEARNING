import React from 'react';
import ParticipantCard from '../Meet/ParticipantCard';

function FavoritesList({ favorites, onRemoveFavorite }) {

  return (
    <div className="favorites-container">
      <div className="favorites-list">
        {favorites.map(participant => (
          <ParticipantCard
            key={participant.id}
            participantName={participant.name}
            participantImage={participant.image}
            participantRole={participant.role}
            onFavoriteToggle={() => onRemoveFavorite(participant.id)}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );
}

export default FavoritesList;
