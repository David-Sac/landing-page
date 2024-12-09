import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#f9fafb', // Fondo claro
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0', // Línea inferior
        padding: '10px 20px',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Título del Header alineado a la izquierda */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 'bold',
            color: '#333', // Color negro elegante
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Mi Landing Page
        </Typography>

        {/* Navegación centrada */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Button
            href="#about"
            sx={{
              textTransform: 'none',
              color: '#555', // Color de texto gris oscuro
              fontSize: '1rem',
              margin: '0 15px',
              '&:hover': {
                color: '#007BFF', // Cambia a azul al pasar el mouse
              },
            }}
          >
            Sobre Nosotros
          </Button>
          <Button
            href="#video"
            sx={{
              textTransform: 'none',
              color: '#555',
              fontSize: '1rem',
              margin: '0 15px',
              '&:hover': {
                color: '#007BFF',
              },
            }}
          >
            Video
          </Button>
          <Button
            href="#apps"
            sx={{
              textTransform: 'none',
              color: '#555',
              fontSize: '1rem',
              margin: '0 15px',
              '&:hover': {
                color: '#007BFF',
              },
            }}
          >
            Apps
          </Button>
          <Button
            href="#contact"
            sx={{
              textTransform: 'none',
              color: '#555',
              fontSize: '1rem',
              margin: '0 15px',
              '&:hover': {
                color: '#007BFF',
              },
            }}
          >
            Contáctanos
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
