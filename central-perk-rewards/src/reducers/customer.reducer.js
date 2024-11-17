import { createSlice } from '@reduxjs/toolkit';;

const loyalCustomersSlice = createSlice({
  name: 'loyalCustomers',
  initialState: {
    customers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoyalCustomers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLoyalCustomers.fulfilled, (state, action) => {
        state.customers = action.payload;
        state.loading = false;
      })
      .addCase(fetchLoyalCustomers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default loyalCustomersSlice.reducer;
