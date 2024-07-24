// src/hooks/useFavorites.js
import { useState, useEffect, useCallback } from 'react';
import { getFavorites, addFavorite, removeFavorite } from '../service/favoritesService';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Fetch favorites from the API
  const fetchFavorites = useCallback(async () => {
    try {
      const data = await getFavorites();
      console.log('i am fetching first time')
      console.log(data)
      setFavorites(data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  }, []);

  // Fetch favorites when the component mounts
  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  // Handle adding a favorite
  const handleAddFavorite = async (participant) => {
    try {
      await addFavorite(participant);
      console.log('ADD successfully')
      await fetchFavorites();
      console.log('refetching after adding') // Refetch favorites after adding
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  };

  // Handle removing a favorite
  const handleRemoveFavorite = async (id) => {
    try {
      await removeFavorite(id);
      console.log('Remove successfully')
      await fetchFavorites(); // Refetch favorites after removing
      console.log('refeching after removing')
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  // Reset the state to initial values
 // const handleReset = () => {
   // alert(' Do you want to Reset All favorites?')
    //setFavorites([]);
    //setLoading(true);
    //setError(null);
  //};

  return {
    favorites,
    handleAddFavorite,
    handleRemoveFavorite,
    //handleReset
  };
};
