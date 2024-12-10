'use client';

import { Typography, Box } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 2,
        mt: 4,
        backgroundColor: '#ffffff', // Fondo blanco
        borderRadius: '20px', // Bordes redondeados
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Sombra ligera para consistencia
        width: '90%', // Ajuste de ancho
        margin: '0 auto', // Centrado horizontal
      }}
    >
      <Typography variant="body2" sx={{ color: '#555' }}>
        © 2024 Mi Página Web. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}
