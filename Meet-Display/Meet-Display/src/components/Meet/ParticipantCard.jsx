// src/components/Meet/ParticipantCard.js
import React from "react";
import Avatar from "./Avatar";
import FavoriteButton from "../Favorite/FavoriteButton";

function ParticipantCard({
  participantName = "Unknown",
  participantImage = "",
  participantRole = "Role not specified",
  onFavoriteToggle = () => {},
  isFavorite = false,
}) {
  // Ensure participantName is at least one character long
  const displayName = participantName.length > 0 ? participantName[0] : '?';
  const avatarSrc = participantImage || displayName;

  return (
    <div className="participant-card">
      <Avatar
        src={avatarSrc}
        alt={displayName}
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
