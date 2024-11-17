
import axiosInstance from '../utils/axiosConfig'; 
import {  createAsyncThunk } from '@reduxjs/toolkit';


export const fetchRedeemPoints = createAsyncThunk('stats/fetchRedeemPoints', async () => {
    const response = await axiosInstance.get('/api/stats/redeem-points');
    return response.data;
  });
  
  export const fetchRewardedPoints = createAsyncThunk('stats/fetchRewardedPoints', async () => {
    const response = await axiosInstance.get('/api/stats/rewarded-points');
    return response.data;
  }); 