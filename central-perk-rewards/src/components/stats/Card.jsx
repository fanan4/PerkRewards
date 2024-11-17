import React from 'react';
import { Box, Typography } from '@mui/material';

const StatsCard = ({ title, value, color }) => {
  return (
    <Box
      sx={{

        backgroundColor: '#FFE4E1', 
        borderRadius: 2,
        padding: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#4CAF50', 
        width: "90%",
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box>
        <Typography variant="subtitle1" sx={{ color: '#4CAF50', fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          {value}
        </Typography>
      </Box>
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          border: `4px solid ${color}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: color }}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatsCard;
