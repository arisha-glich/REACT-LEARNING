// src/services/favoritesService.js
import axios from 'axios';

const FAVORITES_API_URL = 'http://localhost:5000/favorites';

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

// Remove all favorites
export const removeAllFavorites = async () => {
    const allFavorites = await getFavorites(); // Fetch all favorites
    const deleteRequests = allFavorites.map(favorite => axios.delete(`${FAVORITES_API_URL}/${favorite.id}`));
    await Promise.all(deleteRequests); 
    return getFavorites(); // Return updated list (which should be empty)
  };