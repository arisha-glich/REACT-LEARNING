// src/components/ParticipantsContainer.jsx
import React, { useState, useEffect } from 'react';
import ParticipantListTwo from './ParticipantListTwo'; 
import '../../styles/ParticipantList.css';
import FavoritesList from './FavoritesList';
import { useFavorites } from '../../hooks/useFavorites';
import { removeFavorite } from '../../service/favoritesService';

const API_URL = 'http://localhost:5000/participants'; 

function ParticipantsContainer() {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { favorites, handleAddFavorite, handleRemoveFavorite, handleReset} = useFavorites();

  // Fetch participants from the API
  const fetchParticipants = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setParticipants(data);
    } catch (error) {
      setError('Error fetching participants: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParticipants();
  }, []);

  return (
    <div className="ParticipantsContainer">
      <h1>Meeting Participants</h1>
      {loading && <p>Loading participants...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <>
          <ParticipantListTwo
            participantList={participants}
            favorites={favorites}
            onFavoriteToggle={(participant) => {
              if (favorites.some(fav => fav.id === participant.id)) {
                handleRemoveFavorite(participant.id);
              } else {
                handleAddFavorite(participant);
              }
            }}
            isFavorite={(id) => favorites.some(fav => fav.id === id)}
            //The isFavorite function is used to check if a participant with a given id is marked as a favorite. 
          />
          <h1>Favorite Participants</h1>
          <FavoritesList favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
        </>
      )}
     <button onClick={handleReset} className="reset-button">Reset</button> 
    </div>
  );
}

export default ParticipantsContainer;
