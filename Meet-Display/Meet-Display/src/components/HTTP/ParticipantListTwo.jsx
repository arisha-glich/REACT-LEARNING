import React from 'react';
import ParticipantCard from '../Meet/ParticipantCard';

function ParticipantListTwo({ participantList = [], favorites, onFavoriteToggle, isFavorite }) {
  return (
    <div className="participant-list">
      {participantList.map(participant => (
        <ParticipantCard
          key={participant.id}
          participantName={participant.name}
          participantImage={participant.image}
          participantRole={participant.role}
          onFavoriteToggle={() => onFavoriteToggle(participant)}
          isFavorite={isFavorite(participant.id)}
        />
      ))}
    </div>
  );
}

export default ParticipantListTwo;
