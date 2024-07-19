import React from 'react';
import ParticipantCard from './ParticipantCard';
import './ParticipantList.css';

function ParticipantList({ participantList }) {
  return (
    <div className="participant-list">
      {participantList.map(participant => (
        <ParticipantCard key={participant.name} participant={participant} />
      ))}
    </div>
  );
}

export default ParticipantList;
