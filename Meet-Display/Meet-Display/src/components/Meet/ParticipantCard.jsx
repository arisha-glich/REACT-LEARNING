import React from 'react';
import Avatar from './Avatar';
import './ParticipantList.css';


function ParticipantCard({ participantName, participantImage, participantRole }) {
  return (
    <div className="participant-card">
      <Avatar src={participantImage} alt={participantName} size={200} />
      <div className="participant-info">
        <h2>{participantName}</h2>
        <p>{participantRole}</p>
      </div>

    </div>
  );
}

export default ParticipantCard;
