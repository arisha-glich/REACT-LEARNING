import React from 'react';
import ParticipantCard from './ParticipantCard';
import './ParticipantList.css';

function ParticipantList({ participantList=[] }) {
  return (
    <div className="participant-list">
      {participantList.map((participant, index) => (
        <ParticipantCard
          key={index}
          participantName={participant.name}
          participantImage={participant.image}
          participantRole={participant.role}
        />
      ))}
    </div>
  );
}

export default ParticipantList;
