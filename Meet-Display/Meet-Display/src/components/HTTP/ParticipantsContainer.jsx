// src/components/ParticipantsContainer.jsx
import React, { useState, useEffect } from 'react';
import ParticipantListTwo from './ParticipantListTwo';
import '../../styles/ParticipantList.css';
import FavoritesList from './FavoritesList';
import { useFavorites } from '../../hooks/useFavorites';
import apiClient from '../../service/axiosConfig';
import { fetchToken } from '../../service/authService';

function ParticipantsContainer() {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { favorites, handleAddFavorite, handleRemoveFavorite, handleReset } = useFavorites();

  useEffect(() => {
    const initialize = async () => {
      try {
        await fetchToken(); // Fetch and store the token
        await fetchParticipants();
      } catch (error) {
        setError('Error initializing application: ' + error.message);
      }
    };

    initialize();
  }, []);

  // Fetch participants from the API
  const fetchParticipants = async () => {
    try {
      const response = await apiClient.get('/participants');
      setParticipants(response.data);
    } catch (error) {
      setError('Error fetching participants: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

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
              if (favorites.some((fav) => fav.id === participant.id)) {
                handleRemoveFavorite(participant.id);
              } else {
                handleAddFavorite(participant);
              }
            }}
            isFavorite={(id) => favorites.some((fav) => fav.id === id)}
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
