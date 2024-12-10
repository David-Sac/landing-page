import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material';

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#F0F3F9', // Fondo del header
        boxShadow: 'none', // Sin sombra
        borderBottom: 'none', // Sin línea inferior
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Espaciado entre logo y links
          alignItems: 'center',
          padding: { xs: '10px 20px', md: '10px 40px' },
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: '#4e649c', // Color azul similar
            fontWeight: 'bold',
            fontFamily: '"Montserrat", sans-serif', // Fuente limpia y profesional
            fontSize: '1.8rem', // Ajusta el tamaño para resaltar
            letterSpacing: '-0.5px', // Espaciado ajustado entre letras
            cursor: 'pointer',
            marginRight: '20px', // Espaciado hacia los links
          }}
        >
          Mi Landing Page
        </Typography>

        {/* Navegación */}
        <Box
          sx={{
            position: 'absolute', // Posiciona los links en el centro
            left: '50%',
            transform: 'translateX(-50%)', // Centra los links
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#e4e6ed', // Fondo blanco para los links
            padding: '5px 15px',
            borderRadius: '20px', // Bordes redondeados
            boxShadow: 'none', // Sin sombra
            gap: '15px',
          }}
        >
          <Button
            href="#"
            sx={{
              textTransform: 'none',
              fontWeight: '500',
              color: '#1a1a1a',
              fontFamily: '"Poppins", sans-serif',
              '&:hover': {
                backgroundColor: '#e6eaf2', // Fondo más claro al pasar el mouse
              },
            }}
          >
            Home
          </Button>
          <Button
            href="#about"
            sx={{
              textTransform: 'none',
              fontWeight: '500',
              color: '#1a1a1a',
              fontFamily: '"Poppins", sans-serif',
              '&:hover': {
                backgroundColor: '#e6eaf2',
              },
            }}
          >
            About
          </Button>
          <Button
            href="#apps"
            sx={{
              textTransform: 'none',
              fontWeight: '500',
              color: '#1a1a1a',
              fontFamily: '"Poppins", sans-serif',
              '&:hover': {
                backgroundColor: '#e6eaf2',
              },
            }}
          >
            Apps
          </Button>
          <Button
            href="#contact"
            sx={{
              textTransform: 'none',
              fontWeight: '500',
              color: '#1a1a1a',
              fontFamily: '"Poppins", sans-serif',
              '&:hover': {
                backgroundColor: '#e6eaf2',
              },
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
