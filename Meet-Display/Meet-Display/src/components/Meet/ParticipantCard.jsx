// src/components/Meet/ParticipantCard.js
import React from "react";
import Avatar from "./Avatar";
import FavoriteButton from "../Favorite/FavoriteButton";

function ParticipantCard({
  participantName,
  participantImage,
  participantRole,
  onFavoriteToggle,
  isFavorite,
}) {
  return (
    <div className="participant-card">
      <Avatar
        src={participantImage || participantName[0]}
        alt={participantName[0]}
        size={150}
      />
      <div className="participant-info">
        <h2>{participantName}</h2>
        <p>{participantRole}</p>
      </div>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggle={onFavoriteToggle}
      />
    </div>
  );
}

export default ParticipantCard;