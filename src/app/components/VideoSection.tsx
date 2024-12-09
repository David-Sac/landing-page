'use client';

import { Box } from '@mui/material';

export default function VideoSection() {
  return (
    <Box
      sx={{
        padding: { xs: '20px', md: '40px' },
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        marginTop: '20px',
      }}
    >
      
      <video
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          maxWidth: '800px',
          borderRadius: '30px',
        }}
      >
        <source src="/video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </Box>
  );
}
