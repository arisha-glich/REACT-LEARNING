// src/services/authService.js
import apiClient from './axiosConfig';

export const fetchToken = async () => {
  try {
    const response = await apiClient.get('/users');
    const user = response.data[0]; // Assuming you want the first user's token
    if (user && user.token) {
      localStorage.setItem('token', user.token);
      console.log('Token stored in localStorage:', user.token);
    } else {
      throw new Error('Token not found');
    }
  } catch (error) {
    console.error('Fetching token failed:', error);
    throw error;
  }
};
