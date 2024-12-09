import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0070f3',
    },
    background: {
      default: '#f9fafb',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#6c757d',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
});

export default theme;
