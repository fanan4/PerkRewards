// src/routes/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardStats from '../components/DashboardStats';

const AppRoutes = () => {
  return (
    <Routes>
       <Route exact path="/" element={<DashboardStats />}></Route>   
    </Routes>
  );
};

export default AppRoutes;
