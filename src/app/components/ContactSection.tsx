'use client';

import { Box, Typography, TextField, Button } from '@mui/material';

export default function ContactSection() {
  return (
    <Box
      sx={{
        padding: '40px',
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        marginTop: '20px',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contáctanos
      </Typography>
      <Box
        component="form"
        sx={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px', margin: '0 auto' }}
      >
        <TextField label="Nombre" variant="outlined" fullWidth />
        <TextField label="Correo Electrónico" variant="outlined" fullWidth />
        <TextField label="Mensaje" variant="outlined" multiline rows={4} fullWidth />
        <Button variant="contained" color="primary">
          Enviar
        </Button>
      </Box>
    </Box>
  );
}
