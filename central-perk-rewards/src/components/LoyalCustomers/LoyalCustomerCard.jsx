// src/components/LoyalCustomerCard.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const LoyalCustomerCard = ({ customer }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
      }}
    >
      <Box
        component="img"
        src={customer.imageUrl}
        alt={customer.name}
        sx={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          border: '2px solid #4CAF50', // Cercle avec bordure verte
        }}
      />
      <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        {customer.name}
      </Typography>
    </Box>
  );
};

export default LoyalCustomerCard;
