import * as React from 'react';
import ProductCategories from './Views/ProductCategories';
import ProductSmokingHero from './Views/ProductSmokingHero';
import AppFooter from './Views/AppFooter';
import ProductHero from './Views/ProductHero';
import ProductValues from './Views/ProductValues';
import ProductHowItWorks from './Views/ProductHowItWorks';
import ProductCTA from './Views/ProductCTA';

function Home() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default Home;