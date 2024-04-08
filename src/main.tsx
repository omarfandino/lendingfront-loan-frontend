import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import LandingPage from './components/LandingPage/LandingPage';

import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    primary: {
      main: '#F2380F',
    },
    secondary: {
      main: '#102445',
    },
    text: {
      primary: '#F2380F',
      secondary: '#102445',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  </React.StrictMode>,
);
