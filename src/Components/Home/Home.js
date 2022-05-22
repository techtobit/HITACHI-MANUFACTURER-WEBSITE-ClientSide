import React from 'react';
import CompanyInfo from './CompanyInfo';
import HeroBanner from './Hero-Banner/HeroBanner';
import Products from './Products/Products';
import Innovation from './ProductsPromotion/Innovation';

const Home = () => {
 return (
  <div className='bg-accent'>
   <HeroBanner></HeroBanner>
   <Innovation></Innovation>
   <Products></Products>
   <CompanyInfo></CompanyInfo>
  </div>
 );
};

export default Home;