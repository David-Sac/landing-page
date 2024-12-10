'use client';

import Slider from 'react-slick';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';

// Array de aplicaciones con enlaces
const apps = [
  { name: 'Radios Peruanas', rating: 4.8, image: '/images/01.webp', link: 'https://play.google.com/store/apps/details?id=com.radiosdeperuenvivogratis.radiosperuanaenvivo.radiosperuanasescucharenvivoonline.radiosdelperufmenvivo' },
  { name: 'MegaMix Radio 96.7', rating: 4.6, image: '/images/02.webp', link: 'https://play.google.com/store/apps/details?id=com.radiomegamixlima.radiolamegamegamix967fmlimaenvivoperu' },
  { name: 'Radio Z Rock and Pop en vivo', rating: 4.4, image: '/images/03.webp', link: 'https://play.google.com/store/apps/details?id=com.radiozrockandpopenvivopero.radiozrockandpopenvivoperu' },
  { name: 'Radiomar Plus 106.3 FM', rating: 4.6, image: '/images/04.webp', link: 'https://play.google.com/store/apps/details?id=com.radiomarplusenvivo.radiomarplusdeperuescucharenvivo.radiomar1063fmperu' },
  { name: 'Formulario para Física', rating: 5.0, image: '/images/05.webp', link: 'https://play.google.com/store/apps/details?id=com.elide.for_fisica' },
  { name: 'Radio Panamericana Perú', rating: 5.0, image: '/images/06.webp', link: 'https://play.google.com/store/apps/details?id=com.radiopanamericanaperu.radiopanamericanaenvivoperu1011fmenlineaperu' },
  { name: 'Rádios Brasileiras', rating: 4.7, image: '/images/07.webp', link: 'https://play.google.com/store/apps/details?id=com.radiosdobrasilamfm.radiosbrasiledomundo.todasasradiosdobrasil.evangelicasbrasileiras.catolicasbrasileiras' },
  { name: 'Radio Liberdade FM 92.9 BH MG', rating: 4.9, image: '/images/08.webp', link: 'https://play.google.com/store/apps/details?id=com.radioliberdadefm929mg.radioliberdadefm929belohorizontemgaovivobh' },
  { name: 'Rádio 93 FM Gospel RJ ao vivo', rating: 5.0, image: '/images/09.webp', link: 'https://play.google.com/store/apps/details?id=com.radio93fmgospel.ouvirradio93fmgospelrjaovivooucaagora' },
  { name: 'Radio 102.3 FM Porto Alegre', rating: 5.0, image: '/images/10.webp', link: 'https://play.google.com/store/apps/details?id=com.radio1023fmportoalegre.radio1023fmportoalegrersbrasilaovivopabrasil' },
  { name: 'Radio Bandeirantes AM SP 840', rating: 4.8, image: '/images/11.webp', link: 'https://play.google.com/store/apps/details?id=com.radiobandeirantesamsp840.radiobandeirantes909fm863fmsaopaulospaovivo' },
  { name: 'Radio La Chevere El Salvador', rating: 4.7, image: '/images/12.webp', link: 'https://play.google.com/store/apps/details?id=com.radiolachevereelsalvador1009fmendirecto.radiolachevere1009fmsansalvador' },
  { name: 'Radio La Otra FM', rating: 4.5, image: '/images/13.webp', link: 'https://play.google.com/store/apps/details?id=com.radiolaotrafmquito.radiolaotrafmquito913ecuadorenvivoonline' },
  { name: 'Radio Globo FM Salvador 90.1', rating: 4.8, image: '/images/14.webp', link: 'https://play.google.com/store/apps/details?id=com.radioglobofmsalvador901.radiogfm901salvadorfmamsprjaovivoouca' },
  { name: 'Rádio Nordeste Evangélica 92.5', rating: 4.6, image: '/images/15.webp', link: 'https://play.google.com/store/apps/details?id=com.radionordesteevangelicafm925natalrn.radionordestefm925aovivo' },
  { name: 'Radio Catedral FM 106.7 RJ', rating: 5.0, image: '/images/16.webp', link: 'https://play.google.com/store/apps/details?id=com.radiocatedralfm1067rjaovivo.radiocatedral1067fmriodejaneiroaovivorj' },
  { name: 'Radio Restauración 105 FM Elim', rating: 4.9, image: '/images/17.webp', link: 'https://play.google.com/store/apps/details?id=com.misioncristianaelimrestauracion1005fm.radiorestauracion1005elim' },
  { name: 'Radio Adventista 96.5 FM', rating: 4.7, image: '/images/18.webp', link: 'https://play.google.com/store/apps/details?id=com.radioadventista965elsalvador.radioadventistaelsalvadorsv' },
  { name: 'Radio Amanecer 98.1 FM', rating: 4.6, image: '/images/19.webp', link: 'https://play.google.com/store/apps/details?id=com.radioamanecerenvivo981fmlavozdelaesperanzaonline.radioamanecer981fminternacional' },
  { name: 'Radio Kiss FM 92.5', rating: 4.8, image: '/images/20.webp', link: 'https://play.google.com/store/apps/details?id=com.radiokissfm925saopaulo.radiokissfm925aovivospbrasilbr' },
  { name: 'Radio Aire FM 100.3 Uruguay', rating: 4.7, image: '/images/21.webp', link: 'https://play.google.com/store/apps/details?id=com.radioairefm1003.radioairefm1003uruguayenvivo' },
  { name: 'Rádio Massa FM 92.9 São Paulo', rating: 4.5, image: '/images/22.webp', link: 'https://play.google.com/store/apps/details?id=com.radiomassafm929saopaulo.radiomassafmspbrasilbr' },
  { name: 'Radio La Cariñosa Cartagena', rating: 4.9, image: '/images/23.webp', link: 'https://play.google.com/store/apps/details?id=com.radiolacarinosacartagena1270am.lacarinosabogota610amcolombiavivo' },
  { name: 'Radio Ranchera 106.5 FM', rating: 5.0, image: '/images/24.webp', link: 'https://play.google.com/store/apps/details?id=com.radioranchera1065elsalvador.radiorancheraenvio1064fmsansalvadorsv' },
  { name: 'Radio ABC 100.1 FM El Salvador', rating: 4.8, image: '/images/25.webp', link: 'https://play.google.com/store/apps/details?id=com.radioabcliveradio.radioabc1001fmelsalvadorenvivo' },
  { name: 'Radio Nativa FM SP 95.3 Brasil', rating: 4.7, image: '/images/26.webp', link: 'https://play.google.com/store/apps/details?id=com.radionativafmsp953.redenativabrasilgratisfmaovivo' },
  { name: 'Radio Melodie Volksmusik', rating: 4.6, image: '/images/27.webp', link: 'https://play.google.com/store/apps/details?id=com.kostenlosesradio.radiomelodievolksmusikmitherzonline' },
  { name: 'Rádio Eldorado FM 107.3', rating: 4.9, image: '/images/28.webp', link: 'https://play.google.com/store/apps/details?id=com.radioeldoradofmsp1073.radioeldoradofm1073.radioeldoradofms1073aovivo' },
  { name: 'Radio Paz FM 89.5 Goiania', rating: 5.0, image: '/images/29.webp', link: 'https://play.google.com/store/apps/details?id=com.radiopazfm895goiania.baixarradiopaz895aovivobr' },
  { name: 'Mundo Livre FM Curitiba', rating: 5.0, image: '/images/30.webp', link: 'https://play.google.com/store/apps/details?id=com.radiomundolivrefmcuritibaaovivo' },
  { name: 'Feliz FM Paz e Vida', rating: 4.8, image: '/images/31.webp', link: 'https://play.google.com/store/apps/details?id=com.radiofelizfmpazevidaaovivoaradioquevoceamafelizfm' },
  { name: 'Radio Guíba FM', rating: 4.9, image: '/images/32.webp', link: 'https://play.google.com/store/apps/details?id=com.radioguaibaportoalegre.radioguaibafm1013aovivo' },
  { name: 'Rádio Dumont FM 104.3', rating: 4.6, image: '/images/33.webp', link: 'https://play.google.com/store/apps/details?id=com.radiodumontfm1043.radiodumontaovivo.asmaistocadasjundiai' },
  { name: 'Fórmulas de cálculo integral', rating: 4.7, image: '/images/34.webp', link: 'https://play.google.com/store/apps/details?id=com.elide.for_calculoii' },
  { name: 'Aprende las Capitales', rating: 4.8, image: '/images/35.webp', link: 'https://play.google.com/store/apps/details?id=com.elide.trivia_ciudades' },
];

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
        background: '#6c757d',
        color: '#fff',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
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
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
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
            <a href={app.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Card
                sx={{
                  borderRadius: '15px',
                  backgroundColor: '#e6e9f2',
                  padding: '20px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  height: '260px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    
                    height: '140px',
                    objectFit: 'contain',
                    marginBottom: '10px',
                  }}
                  image={app.image}
                  alt={app.name}
                />
                <CardContent sx={{ textAlign: 'center', padding: 0 }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ color: '#000', marginBottom: '5px' }}>
                    {app.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555' }}>
                    Calificación: {app.rating.toFixed(1)} ⭐
                  </Typography>
                </CardContent>
              </Card>
            </a>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
