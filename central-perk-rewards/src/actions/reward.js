import {  createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosConfig';;


export const fetchPopularRewards = createAsyncThunk(
    'popularRewards/fetchPopularRewards',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.get('/api/rewards/popular'); // Remplacez par l'URL correcte de l'API
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch rewards');
      }
    }
  );