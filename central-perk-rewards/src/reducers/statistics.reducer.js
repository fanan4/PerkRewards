// src/features/stats/statsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const statsSlice = createSlice({
  name: 'stats',
  initialState: {
    redeemPoints: 0,
    rewardedPoints: 0,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRedeemPoints.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRedeemPoints.fulfilled, (state, action) => {
        state.redeemPoints = action.payload;
        state.loading = false;
      })
      .addCase(fetchRewardedPoints.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRewardedPoints.fulfilled, (state, action) => {
        state.rewardedPoints = action.payload;
        state.loading = false;
      });
  },
});

export default statsSlice.reducer; 
