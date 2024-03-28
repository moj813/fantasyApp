import * as React from 'react';
import ProductSmokingHero from './Views/ProductSmokingHero';
import AppFooter from './Views/AppFooter';
import ProductHero from './Views/ProductHero';

function Home() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default Home;