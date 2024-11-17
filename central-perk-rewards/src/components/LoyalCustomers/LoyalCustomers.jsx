// src/components/LoyalCustomers.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import LoyalCustomerCard from './LoyalCustomerCard';
import { customers } from '../../utils/data';

const LoyalCustomers = () => {
    

  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        padding: 3,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        marginTop: 4,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Loyal Customers
        </Typography>
        <Typography variant="body2" color="primary" sx={{ cursor: 'pointer', fontWeight: 'bold' }}>
          View all
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          marginLeft:4
        }}
      >
        {customers.map((customer) => (
          <LoyalCustomerCard key={customer.id} customer={customer} />
        ))}
      </Box>
    </Box>
  );
}

export default LoyalCustomers;
