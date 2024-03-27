import * as React from 'react';
import Button from '../Components/Button';
import Typography from '../Components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

// Import the background image directly instead of using a relative path
import backgroundImage from '../Components/enhanced.jpg';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Tournaments
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Play in your Friends Match Without Playing Match
      </Typography>
      <Button
        
        variant="contained"
        size="large"
        component="a"
        href="/signup"
        
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Upgrade the Level of Playing
      </Typography>
    </ProductHeroLayout>
  );
}
