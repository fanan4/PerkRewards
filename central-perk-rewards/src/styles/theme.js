// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B4513', // Couleur principale pour le café
    },
    secondary: {
      main: '#FFD700', // Couleur pour les récompenses
    },
    background: {
      default: '#FAF3E0', // Couleur de fond de la sidebar
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
