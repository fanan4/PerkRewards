import { createSlice } from '@reduxjs/toolkit';

const popularRewardsSlice = createSlice({
  name: 'popularRewards',
  initialState: {
    rewards: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularRewards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularRewards.fulfilled, (state, action) => {
        state.rewards = action.payload;
        state.loading = false;
      })
      .addCase(fetchPopularRewards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default popularRewardsSlice.reducer;
