// src/components/StatsSection.jsx
import React, { useEffect } from 'react';

import StatsCard from './Card';
import { Box } from '@mui/material';

const StatsSection = () => {
//   const dispatch = useDispatch();
//   const { redeemPoints, rewardedPoints } = useSelector((state) => state.stats);

//   useEffect(() => {
//     dispatch(fetchRedeemPoints());
//     dispatch(fetchRewardedPoints()); 
//   }, [dispatch]); 

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
      <StatsCard title="Redeem Points this week" value={140} color="#4CAF50" />
      <StatsCard title="Rewarded Points this week" value={200} color="#FF5722" />
    </Box>
  );
};

export default StatsSection;
