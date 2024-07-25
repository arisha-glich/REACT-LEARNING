// src/hooks/useFavorites.js
import { useState, useEffect, useCallback } from 'react';
import { getFavorites, addFavorite, removeFavorite, removeAllFavorites } from '../service/favoritesService';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch favorites from the API
  const fetchFavorites = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getFavorites();
      setFavorites(data);
    } catch (error) {
      setError('Error fetching favorites.');
      console.error('Error fetching favorites:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch favorites when the component mounts
  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  // Handle adding a favorite
  const handleAddFavorite = async (participant) => {
    setLoading(true);
    setError(null);
    try {
      await addFavorite(participant);
      await fetchFavorites(); // Refetch favorites after adding
    } catch (error) {
      setError('Error adding favorite.');
      console.error('Error adding favorite:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle removing a favorite
  const handleRemoveFavorite = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await removeFavorite(id);
      await fetchFavorites(); // Refetch favorites after removing
    } catch (error) {
      setError('Error removing favorite.');
      console.error('Error removing favorite:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle resetting all favorites
  const handleReset = async () => {
    if (window.confirm('Do you want to reset all favorites? This action cannot be undone.')) {
      setLoading(true);
      setError(null);
      try {
        await removeAllFavorites(); // Reset favorites on the server
        setFavorites([]); // Clear local favorites
      } catch (error) {
        setError('Error resetting favorites.');
        console.error('Error resetting favorites:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    favorites,
    loading,
    error,
    handleAddFavorite,
    handleRemoveFavorite,
    handleReset
  };
};
