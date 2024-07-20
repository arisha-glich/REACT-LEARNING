import React from "react";
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

export default ParticipantCard;
