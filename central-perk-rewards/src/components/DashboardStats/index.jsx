// src/components/DashboardStats.jsx
import React from 'react';
import { Box } from '@mui/material';
import StatsSection from '../stats/StatsSection';
import SalesChart from '../stats/SalesChart';
import PopularRewards from '../PopularReward/PopularRewards';
import LoyalCustomers from '../LoyalCustomers/LoyalCustomers';
const DashboardStats = () => {
  return (
    <Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 3,
        padding: 4,
        backgroundColor: '#DFF5E1', 
        borderRadius: 3,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        alignItems: 'stretch',
        justifyContent: 'space-between',
      }}
    >
    
      <Box sx={{ flex: 1 }}>
        <StatsSection />
      </Box>
      
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#FFE4E1', 
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 3, 
        }}
      >
        <SalesChart /> 
      </Box>
      </Box>
      <PopularRewards />
      <LoyalCustomers />
      
    </Box>
  );
};

export default DashboardStats;
