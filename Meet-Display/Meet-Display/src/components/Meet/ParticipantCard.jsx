

import React from 'react';
import Avatar from './Avatar';

function ParticipantCard({
  participantName = '',     
  participantImage = '',          
  participantRole = ''     
}) {
  return (
    <div className="participant-card">
      <Avatar src={participantImage } alt={participantName || 'Anonymous'} size={200} />
      <Avatar src={participantImage } alt={participantName || 'Anonymous'} size={200} />
      <div className="participant-info">
        <h2>{participantName || ''}</h2>
        <p>{participantRole || ''}</p>
      </div>
    </div>
  );
}

export default ParticipantCard;



{/*import React from "react";
import Avatar from "./Avatar";
import "./ParticipantList.css";

function ParticipantCard({ participant }) {
  const { name, image, role } = participant || {};

  return (
    <div className="participant-card">
      <Avatar src={image} alt={name} size={200} />
      <div className="participant-info">
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    </div>
  );
}

export default ParticipantCard; */}