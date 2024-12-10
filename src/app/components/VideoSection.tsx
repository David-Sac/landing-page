'use client';

import { Box } from '@mui/material';

export default function VideoSection() {
  return (
    <Box
      sx={{
        position: 'relative', // Necesario para posicionar el rectángulo detrás del video
        padding: { xs: '20px', md: '40px' },
        textAlign: 'center',
        marginTop: '20px',
      }}
    >
      {/* Fondo blanco detrás del video */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', // Centra el fondo detrás del video
          width: '50%', // Mitad del ancho del video
          height: '50%', // Mitad de la altura del video
          backgroundColor: '#ffffff', // Fondo blanco
          borderRadius: '20px', // Bordes redondeados
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Sombra sutil para efecto flotante
          zIndex: 1, // Asegura que esté detrás del video
        }}
      />

      {/* Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          maxWidth: '800px',
          borderRadius: '30px', // Bordes redondeados para el video
          position: 'relative', // Asegura que el video esté por encima del fondo
          zIndex: 2,
        }}
      >
        <source src="/video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </Box>
  );
}
