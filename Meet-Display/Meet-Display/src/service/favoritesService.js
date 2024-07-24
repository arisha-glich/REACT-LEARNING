// src/services/favoritesService.js
import axios from 'axios';

const FAVORITES_API_URL = 'http://localhost:5000/favorites';
const PARTICIPANTS_API_URL = 'http://localhost:5000/participants'; 

// Fetch all favorites
export const getFavorites = async () => {
  const response = await axios.get(FAVORITES_API_URL);
  return response.data;
};

// Add a new favorite
export const addFavorite = async (favorite) => {
  await axios.post(FAVORITES_API_URL, favorite);
  return getFavorites(); // Return updated list
};

// Remove a favorite by id
export const removeFavorite = async (id) => {
  await axios.delete(`${FAVORITES_API_URL}/${id}`);
  return getFavorites(); // Return updated list
};

// Fetch all participants
export const getParticipants = async () => {
  const response = await axios.get(PARTICIPANTS_API_URL);
  return response.data;
};
