import React from 'react';
import ParticipantCard from './ParticipantCard';


function FavouriteLists({ favorites, onFavoriteToggle, isListVisible, onToggleListVisibility }) {
  return (
    <div className="favorites-container">
      <button
        className="toggle-favorites-button"
        onClick={onToggleListVisibility}
        aria-label={isListVisible ? 'Hide favorites' : 'Show favorites'}
      >
        {isListVisible ? 'Hide Favorites' : 'Show Favorites'}
      </button>
      {isListVisible && (
        <ul className="favorites-list">
          {favorites.length === 0 ? (
            <p>No favorites yet</p>
          ) : (
            favorites.map((participant, index) => (
              <li key={index} className="favorite-item">
                <ParticipantCard
                  participantName={participant.name}
                  participantImage={participant.image}
                  participantRole={participant.role}
                  isFavorite={true}
                  onFavoriteToggle={onFavoriteToggle}
                />
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default FavouriteLists;
