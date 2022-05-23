import React from 'react';
import CompanyInfo from './CompanyInfo';
import HeroBanner from './Hero-Banner/HeroBanner';
import Products from './Products/Products';
import Innovation from './ProductsPromotion/Innovation';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
 return (
  <div className='bg-accent'>
   <HeroBanner></HeroBanner>
   <Innovation></Innovation>
   <Products></Products>
   <CompanyInfo></CompanyInfo>
   <Subscribe></Subscribe>
  </div>
 );
};

export default Home;