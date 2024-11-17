import { configureStore } from '@reduxjs/toolkit';
import loyalCustomersReducer from '../reducers/customer.reducer';
import popularRwardsReducer from '../reducers/reward.reducer'
import statsReducer from '../reducers/statistics.reducer'
const store = configureStore({
  reducer: {
    loyalCustomers:loyalCustomersReducer,
    propularRewards:popularRwardsReducer,
    stats:statsReducer
  },
});

export default store;  