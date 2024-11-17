// src/components/Sidebar/SidebarItem.jsx
import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const SidebarItem = ({ icon: Icon, label, path }) => {
  const location = useLocation();
  const isSelected = location.pathname === path;

  return (
    <ListItem
      button
      component={Link}
      to={path}
      sx={{
        backgroundColor: isSelected ? '#4CAF50' : 'transparent', // Fond vert si sélectionné
        color: isSelected ? '#FFFFFF' : '#5C4033', // Texte blanc si sélectionné, sinon marron
        borderRadius: '12px', // Bord arrondi pour correspondre au style de l'image
        marginY: 0.5,
        paddingY: 1,
        paddingX: 2,
        '&:hover': {
          backgroundColor: isSelected ? '#4CAF50' : '#F0F0F0', // Conserve le vert si sélectionné, sinon gris clair au survol
        },
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          marginRight: 1.5,
          color: isSelected ? '#FFFFFF' : '#5C4033', // Icône en blanc si sélectionné
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isSelected ? (
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: '50%', // Cercle autour de l'icône
              backgroundColor: '#FFFFFF', // Fond blanc pour le cercle
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon sx={{ color: '#4CAF50' }} /> {/* Icône verte */}
          </Box>
        ) : (
          <Icon />
        )}
      </ListItemIcon>
      <ListItemText
        primary={label}
        primaryTypographyProps={{
          fontWeight: isSelected ? 'bold' : 'normal', // Texte en gras si sélectionné
          fontSize: '0.9rem',
        }}
      />
    </ListItem>
  );
};

export default SidebarItem;
