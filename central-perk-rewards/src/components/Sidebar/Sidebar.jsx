// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import { Drawer, List, Box, Typography, Divider, Avatar } from '@mui/material';
import SidebarItem from './SidebarItem';
import { menuItems } from '../../utils/navigationConfig';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent" 
      sx={{
        width: 260,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 260,
          boxSizing: 'border-box',
          backgroundColor: '#FFF7E1', // Couleur de fond de la sidebar
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px 8px',
          backgroundColor: '#FFEDD5', // Couleur de fond pour la section profil
        }}
      >
        <Avatar
          alt="Gunther"
          src="/path/to/gunther-profile.jpg"
          sx={{ width: 72, height: 72, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}
        />
        <Typography variant="h6" sx={{ mt: 1, color: '#5C4033', fontWeight: 'bold' }}>
          Gunther
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Owner
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: '#D8B384' }} />
      <List>
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            path={item.path}
          />
        ))}
      </List>
      <Box
        sx={{
          mt: 'auto',
          mb: 2,
          textAlign: 'center',
          paddingTop: '16px',
          paddingBottom: '16px',
          backgroundColor: '#FFEDD5', // Couleur de fond pour le bas de la sidebar
        }}
      >
        <Divider sx={{ backgroundColor: '#D8B384' }} />
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            mt: 2,
            cursor: 'pointer',
            color: '#A52A2A',
            fontWeight: 'bold',
            '&:hover': {
              color: '#D2691E',
              textDecoration: 'underline',
            },
          }}
        >
          Logout
        </Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
