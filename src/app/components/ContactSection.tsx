'use client';

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import emailjs from 'emailjs-com';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      // Envía el correo con EmailJS
      const result = await emailjs.send(
        'service_vk3b3jf', // Reemplaza con tu Service ID de EmailJS
        'template_2piw3d2', // Tu Template ID
        {
          from_name: formData.nombre, // Nombre del remitente
          to_name: 'Mi Landing Page', // Nombre fijo de tu página
          from_email: formData.email, // Correo del remitente
          message: formData.mensaje, // Mensaje escrito por el usuario
        },
        'dFeitRGHwoA2Wut-1' // Reemplaza con tu clave pública de EmailJS
      );

      if (result.status === 200) {
        setStatus('Mensaje enviado exitosamente.');
        setFormData({ nombre: '', email: '', mensaje: '' });
      } else {
        setStatus('Error al enviar el mensaje. Intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      setStatus('Error al enviar el mensaje. Intenta nuevamente.');
    }
  };

  return (
    <Box
      sx={{
        padding: '40px',
        backgroundColor: '#f9fafb',
        borderRadius: '30px',
        marginTop: '40px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Grid container spacing={4}>
        {/* Columna 1: Logo y descripción */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              color: '#1a1a1a',
              marginBottom: '10px',
            }}
          >
            Mi Landing Page
          </Typography>
          <Typography variant="body2" sx={{ color: '#555', marginBottom: '20px' }}>
            Estamos aquí para ayudarte con nuestras aplicaciones innovadoras y soporte excepcional.
          </Typography>
          <Typography variant="body2" sx={{ color: '#555' }}>
            Contáctanos para más información.
          </Typography>
        </Grid>

        {/* Columna 2: Formulario */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
            Contáctanos
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxWidth: '100%',
            }}
          >
            <TextField
              label="Nombre"
              name="nombre"
              variant="outlined"
              fullWidth
              value={formData.nombre}
              onChange={handleChange}
            />
            <TextField
              label="Correo Electrónico"
              name="email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Mensaje"
              name="mensaje"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={formData.mensaje}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#3a6c91',
                color: '#fff',
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#005bb5',
                },
              }}
            >
              Enviar
            </Button>
          </Box>
          {status && (
            <Typography variant="body2" sx={{ marginTop: '20px', color: '#555' }}>
              {status}
            </Typography>
          )}
        </Grid>

        {/* Columna 3: Información adicional */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
            Información
          </Typography>
          <Box>
            <Typography variant="body2" sx={{ marginBottom: '5px', display: 'flex', alignItems: 'center', color: '#555' }}>
              <img
                src="/icons/gmail.svg"
                alt="Email Icon"
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
              />
              Elideeduardoportocarreroburga@gmail.com
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '5px', display: 'flex', alignItems: 'center', color: '#555' }}>
              <img
                src="/icons/cell.svg"
                alt="Phone Icon"
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
              />
              +51 948 011 627
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', color: '#555' }}>
              <img
                src="/icons/mundo.svg"
                alt="Location Icon"
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
              />
              Dirección: Loreto, Perú
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
