'use client';

import { Box, Typography, Button } from '@mui/material';

export default function AboutSection() {
  return (
    <Box
      sx={{
        padding: { xs: '20px', md: '40px' },
        textAlign: 'center',
        backgroundColor: '#f9fafb',
        borderRadius: '10px',
        marginTop: '20px',
      }}
    >
      {/* Título */}
      <Typography variant="h1" gutterBottom>
        Todo lo que Necesitas en una App: Descubre Elide en Google Play
      </Typography>

      {/* Subtítulo */}
      <Typography variant="body1" sx={{ marginBottom: '20px', color: '#6c757d' }}>
        Explora nuestras aplicaciones diseñadas para ofrecerte entretenimiento, radio y herramientas únicas. Todo en un solo lugar.
      </Typography>

      {/* Botón Principal */}
      <Button
        variant="contained"
        href="https://play.google.com/store/apps/dev?id=6950831628125377421" // Enlace a Google Play
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          backgroundColor: '#0070f3',
          color: '#fff',
          textTransform: 'none',
          borderRadius: '20px',
          padding: '10px 20px',
          fontWeight: '600',
          fontSize: '1rem',
          '&:hover': {
            backgroundColor: '#005bb5',
          },
          marginBottom: '20px', // Espaciado con los iconos
        }}
      >
        Explorar Play Store
      </Button>

      {/* Iconos Estilo Etiqueta */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '15px',
          marginTop: '20px',
        }}
      >
        {/* Etiquetas */}
        <Tag label="React Native" link="https://reactnative.dev" />
        <Tag label="Flutter" link="https://flutter.dev" />
        <Tag label="Java" link="https://www.java.com" />
        <Tag label="Kotlin" link="https://kotlinlang.org" />
      </Box>
    </Box>
  );
}

/* Componente Etiqueta Personalizado */
function Tag({ label, link }: { label: string; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: 'none',
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '5px 15px',
          borderRadius: '20px',
          backgroundColor: '#f0f0f0',
          color: '#1a1a1a',
          fontWeight: '500',
          fontSize: '0.875rem',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.2s ease, transform 0.2s ease',
          '&:hover': {
            backgroundColor: '#e0e0e0',
            transform: 'scale(1.05)',
          },
        }}
      >
        {label}
      </Box>
    </a>
  );
}
