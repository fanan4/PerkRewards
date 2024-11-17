// src/components/SalesChart.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Typography } from '@mui/material';

import { Salesdata } from '../../utils/data';
const SalesChart = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 200,
        color: '#4CAF50',
      }}
    >
      <Typography variant="subtitle1" sx={{ color: '#4CAF50', fontWeight: 'bold', marginBottom: 2 }}>
        Sales Per Months
      </Typography>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={Salesdata}>
          <XAxis dataKey="month" stroke="#4CAF50" />
          <YAxis stroke="#4CAF50" />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#4CAF50" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SalesChart;
