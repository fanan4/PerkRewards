import React from 'react';
import { Box, Typography } from '@mui/material';

const RewardCard = ({ reward }) => {
  return (
    <Box
      sx={{
        width:"17%",
        backgroundColor: '#FFF7E1', 
        borderRadius: 2,
        padding:1,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',  
      }}
    >
      <Box
        component="img"
        src={reward.imageUrl}
        alt={reward.name}
        sx={{ width: "90%", height: "80%", marginBottom: 1, borderRadius: 1 }}
      />
      <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: '1.05rem' }}>
        {reward.name}
      </Typography>
    </Box>
  );
};

export default RewardCard;
