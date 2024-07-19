import React from 'react';

function ParticipantCard({ participant }) {
  const { name, image, role } = participant;
  const firstName = name.split(' ')[0];

  return (
    <div className="participant-card">
      {image ? (
        <img src={image} alt={firstName[0]} className="participant-image" />
      ) : (
        <div className="participant-initials">{firstName[0]}</div>
      )}
      <div className="participant-info">
        <h2>{name}</h2>
        <p>{role}</p> </div>
    </div>
  );
}

export default ParticipantCard;
