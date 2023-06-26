import React from 'react';
import LoadProducts from '../../Hooks/LoadProducts';
import SectionHeading from '../../Shared/SectionHeading/SectionHeading';
import SubHeading from '../../Shared/SectionHeading/SubHeading';
import DisplayAllProducts from './DisplayAllProducts';

const AllProducts = () => {
 const [products] = LoadProducts();

 return (
  <div className='bg-accent lg:p-26 md:p-20 p-10  '>
   <SubHeading>Latest Product</SubHeading>
   <SectionHeading> New Products On Market</SectionHeading>
   <div className="products grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 sm:gap-10 justify-center justify-items-center items-center">
    {
     products.map(product => <DisplayAllProducts
      key={product._id}
      product={product}
     ></DisplayAllProducts>)
    }
   </div>
  </div>
 );
};

export default AllProducts;