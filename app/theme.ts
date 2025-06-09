'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF69B4', // Accent Pink
    },
    secondary: {
      main: '#FFC0CB', // Secondary Pink
    },
    background: {
      default: '#F5F5DC', // Beige
      paper: '#FFFFFF', // White for cards/components
    },
    text: {
      primary: '#4A4A4A',
      secondary: '#DB7093', // A darker pink for secondary text
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
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
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          textTransform: 'none',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#FFB6C1', // Primary Pink
          '&.Mui-checked': {
            color: '#FF69B4', // Accent Pink when checked
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default theme; 