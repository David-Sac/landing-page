'use client';

import Slider from 'react-slick';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';

// Array de aplicaciones
const apps = [
  { name: 'Radios Peruanas', rating: 4.8, image: '/images/01.webp' },
  { name: 'MegaMix Radio 96.7', rating: 4.6, image: '/images/02.webp' },
  { name: 'Radio 2 Rock and Pop', rating: 4.4, image: '/images/03.webp' },
  { name: 'Radiomar Plus 106.3 FM', rating: 4.6, image: '/images/04.webp' },
  { name: 'Formulario para Física', rating: 5.0, image: '/images/05.webp' },
  { name: 'Radio Panamericana Perú', rating: 5.0, image: '/images/06.webp' },
  { name: 'Rádios Brasileiras', rating: 4.7, image: '/images/07.webp' },
  { name: 'Radio Liberdade FM 92.9', rating: 4.9, image: '/images/08.webp' },
  { name: 'Rádio 93 FM Gospel RJ', rating: 5.0, image: '/images/09.webp' },
  { name: 'Radio 102.3 FM Porto Alegre', rating: 5.0, image: '/images/10.webp' },
  { name: 'Radio Bandeirantes AM SP 840', rating: 4.8, image: '/images/11.webp' },
  { name: 'Radio La Chevere El Salvador', rating: 4.7, image: '/images/12.webp' },
  { name: 'Radio La Otra FM', rating: 4.5, image: '/images/13.webp' },
  { name: 'Radio Globo FM Salvador 90.1', rating: 4.8, image: '/images/14.webp' },
  { name: 'Rádio Nordeste Evangélica 92.5', rating: 4.6, image: '/images/15.webp' },
  { name: 'Radio Catedral FM 106.7 RJ', rating: 5.0, image: '/images/16.webp' },
  { name: 'Radio Restauración 105 FM Elim', rating: 4.9, image: '/images/17.webp' },
  { name: 'Radio Adventista 96.5 FM', rating: 4.7, image: '/images/18.webp' },
  { name: 'Radio Amanecer 98.1 FM', rating: 4.6, image: '/images/19.webp' },
  { name: 'Radio Kiss FM 92.5', rating: 4.8, image: '/images/20.webp' },
  { name: 'Radio Aire FM 100.3 Uruguay', rating: 4.7, image: '/images/21.webp' },
  { name: 'Rádio Massa FM 92.9 São Paulo', rating: 4.5, image: '/images/22.webp' },
  { name: 'Radio La Cariñosa Cartagena', rating: 4.9, image: '/images/23.webp' },
  { name: 'Radio Ranchera 106.5 FM', rating: 5.0, image: '/images/24.webp' },
  { name: 'Radio ABC 100.1 FM El Salvador', rating: 4.8, image: '/images/25.webp' },
  { name: 'Radio Nativa FM SP 95.3 Brasil', rating: 4.7, image: '/images/26.webp' },
  { name: 'Radio Melodie Volksmusik', rating: 4.6, image: '/images/27.webp' },
  { name: 'Rádio Eldorado FM 107.3', rating: 4.9, image: '/images/28.webp' },
  { name: 'Radio Paz FM 89.5 Goiania', rating: 5.0, image: '/images/29.webp' },
  { name: 'Mundo Livre FM Curitiba', rating: 5.0, image: '/images/30.webp' },
  { name: 'Feliz FM Paz e Vida', rating: 4.8, image: '/images/31.webp' },
  { name: 'Radio Guíba FM', rating: 4.9, image: '/images/32.webp' },
  { name: 'Rádio Dumont FM 104.3', rating: 4.6, image: '/images/33.webp' },
  { name: 'Fórmulas de cálculo integral', rating: 4.7, image: '/images/34.webp' },
  { name: 'Aprende las Capitales', rating: 4.8, image: '/images/35.webp' },
];

// Flecha personalizada
function CustomArrow(props: { className?: string; style?: React.CSSProperties; onClick?: () => void }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#6c757d', // Gris oscuro
        color: '#fff',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
      }}
      onClick={onClick}
    />
  );
}

export default function CardCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ padding: { xs: '20px', md: '40px' } }}>
      <Slider {...settings}>
        {apps.map((app, index) => (
          <Box key={index} sx={{ padding: '10px' }}>
            <Card
              sx={{
                borderRadius: '20px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: '300px', // Mayor altura para imágenes completas
                  objectFit: 'cover',
                }}
                image={app.image}
                alt={app.name}
              />
              <CardContent>
                <Typography variant="h6" textAlign="center" fontWeight="bold">
                  {app.name}
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="center"
                  display="block"
                  sx={{ color: '#6c757d' }}
                >
                  Calificación: {app.rating.toFixed(1)} ⭐
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
