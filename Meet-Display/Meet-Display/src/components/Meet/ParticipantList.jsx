import React from 'react';
import ParticipantCard from './ParticipantCard';
import './ParticipantList.css';

function ParticipantList({ participantList = [] }) {
  return (
    <div className="participant-list">
      {participantList.map((participant, index) => (
        <ParticipantCard 
          key={index}
        />
      ))}
    </div>
  );
}

export default ParticipantList;
