
import React from 'react';
import Avatar from './Avatar';

function ParticipantCard({
  participantName = 'Unknown',     
  participantImage = '',          
  participantRole = 'Unknown'     
}) {
  return (
    <div className="participant-card">
      <Avatar src={participantImage } alt={participantName || 'Anonymous'} size={200} />
      <div className="participant-info">
        <h2>{participantName || 'Unknown'}</h2>
        <p>{participantRole || 'Unknown'}</p>
      </div>
    </div>
  );
}

export default ParticipantCard;
