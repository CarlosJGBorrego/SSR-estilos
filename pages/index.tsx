// pages/index.tsx
import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h1" component="h1" gutterBottom>
        Bienvenido a mi Next.js App
      </Typography>
      <Button variant="contained" color="primary">
        Hacer algo
      </Button>
    </Container>
  );
};

export default Home;
