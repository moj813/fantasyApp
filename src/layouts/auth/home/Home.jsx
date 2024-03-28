import * as React from 'react';
import ProductSmokingHero from './Views/ProductSmokingHero';
import AppFooter from './Views/AppFooter';
import Review from './Views/Review';
import Cards from './Views/Cards';
import Test from './Views/test';
import ProductHero from './Views/ProductHero';


import './Home.css'
function Home() {
  return (
    <React.Fragment>
      <div className='heroTest'>
        <Test />
      </div>
      <Review />
      <div className='atHomeSeprator'>
        <Cards />
      </div>
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default Home;