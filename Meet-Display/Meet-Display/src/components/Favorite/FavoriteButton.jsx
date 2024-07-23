import React from "react";

//isFavorite: A boolean prop
//onToggle: A callback function to handle the toggling of the favorite status when the button is clicked
function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <button
      className={`favorite-button ${isFavorite ? "favorited" : ""}`}
      onClick={onToggle}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
}

export default FavoriteButton;
