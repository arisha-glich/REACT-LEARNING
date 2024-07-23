import React from "react";
import { useFavorites } from "../Context/FavoritesContext";
import ParticipantCard from "../Meet/ParticipantCard";

function ShowFavorites() {
  const {
    favorites,
    isListVisible,
    handleToggleListVisibility,
    handleFavoriteToggle,
    resetFavorites,
  } = useFavorites();

  return (
    <div>
      <button onClick={handleToggleListVisibility}>
        {isListVisible ? "Hide Favorites" : "Show Favorites"}
      </button>
      <button onClick={resetFavorites}>Reset Favorites</button>
      {isListVisible && (
        <div>
          <div className="favorites-list">
            {favorites.map((fav, index) => (
              <ParticipantCard
                key={index}
                participantName={fav.name}
                participantImage={fav.image}
                participantRole={fav.role}
                isFavorite={true}
                onFavoriteToggle={() => handleFavoriteToggle(fav.name, favorites)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowFavorites;
