// src/components/PopularRewards.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, CircularProgress } from '@mui/material';
import RewardCard from './RewardCard';
import { staticRewards } from '../../utils/data';

const PopularRewards = () => {
  //const dispatch = useDispatch();
  //const { rewards, loading } = useSelector((state) => state.popularRewards);

  // Données statiques temporaires
  

  const [staticLoading, setStaticLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setStaticLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const rewardsToDisplay = staticRewards;

  return (
    <Box sx={{ backgroundColor: '#FFFFFF', borderRadius: 2, padding: 3, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', marginTop: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Popular Rewards
        </Typography>
        <Typography variant="body2" color="primary" sx={{ cursor: 'pointer', fontWeight: 'bold' }}>
          View all
        </Typography>
      </Box>
      {staticLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 200 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ display: 'flex', gap: 2 }}>
          {rewardsToDisplay.map((reward) => (
            <RewardCard key={reward.id} reward={reward} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default PopularRewards;
 