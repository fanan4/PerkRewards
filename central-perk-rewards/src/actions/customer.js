import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosConfig';


export const fetchLoyalCustomers = createAsyncThunk(
    'loyalCustomers/fetchLoyalCustomers',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.get('/api/customers/loyal'); 
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch loyal customers');
      }
    }
  );