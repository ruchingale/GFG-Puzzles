'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF69B4', // Hot Pink
      contrastText: '#fff',
    },
    secondary: {
      main: '#C2185B', // Deep Rose
      contrastText: '#fff',
    },
    background: {
      default: '#F8EAFB', // Rich pastel lavender-pink
      paper: '#FFE4EC', // Peachy-pink for cards
    },
    text: {
      primary: '#8D1457', // Deep Plum
      secondary: '#C2185B', // Rose
      disabled: '#B39DDB', // Soft Lavender for disabled
    },
  },
  typography: {
    fontFamily: '"Quicksand", Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#FF69B4',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#FF69B4',
    },
    h4: {
      color: '#C2185B',
      fontWeight: 700,
    },
    h5: {
      color: '#FF69B4',
      fontWeight: 600,
    },
    body1: {
      color: '#8D1457',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          textTransform: 'none',
          background: 'linear-gradient(90deg, #FF69B4 0%, #C2185B 100%)',
          color: '#fff',
          fontWeight: 600,
          boxShadow: '0 2px 8px 0 #FF69B4',
          '&:hover': {
            background: 'linear-gradient(90deg, #C2185B 0%, #FF69B4 100%)',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#FF69B4',
          '&.Mui-checked': {
            color: '#C2185B',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          backgroundColor: '#FFE4EC',
          boxShadow: '0px 4px 16px rgba(255, 105, 180, 0.13)',
        },
      },
    },
  },
});

export default theme; 