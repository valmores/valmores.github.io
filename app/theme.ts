'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a855f7', // Vibrant purple
    },
    secondary: {
      main: '#888888',
    },
    background: {
      default: '#0a0a0a', // Deeper black
      paper: '#121212',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a1a1aa',
    },
  },
  typography: {
    fontFamily: '"Outfit", "Inter", sans-serif',
    h1: { 
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 800, 
      letterSpacing: '-0.02em',
      textTransform: 'uppercase'
    },
    h2: { 
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 700, 
      letterSpacing: '-0.01em', 
      fontSize: '2.5rem' 
    },
    h3: { 
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600, 
      fontSize: '1.6rem' 
    },
    h4: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
    },
    h6: { 
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600, 
      letterSpacing: '0.2em', 
      textTransform: 'uppercase', 
      fontSize: '0.75rem' 
    },
    body1: { fontWeight: 400, lineHeight: 1.6 },
    body2: { fontWeight: 400, lineHeight: 1.6 },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px', // Pill shaped as in the image
          textTransform: 'none',
          fontWeight: 600,
          letterSpacing: '0.02em',
          padding: '12px 32px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 16,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(255,255,255,0.08)',
        },
      },
    },
  },
});

export default theme;
