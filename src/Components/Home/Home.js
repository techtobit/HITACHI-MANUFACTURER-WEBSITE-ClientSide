import React from 'react';
import CompanyInfo from './CompanyInfo';
import HeroBanner from './Hero-Banner/HeroBanner';
import Products from './Products/Products';

const Home = () => {
 return (
  <>
   <HeroBanner></HeroBanner>
   <Products></Products>
   <CompanyInfo></CompanyInfo>
  </>
 );
};

export default Home;