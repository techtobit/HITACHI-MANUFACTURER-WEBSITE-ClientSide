import React from 'react';
import LoadProducts from '../../Hooks/LoadProducts';
import SectionHeading from '../../Shared/SectionHeading/SectionHeading';
import SubHeading from '../../Shared/SectionHeading/SubHeading';
import DisplayProducts from './DisplayProducts';

const Products = () => {
 const [products] = LoadProducts();

 return (
  <div className='bg-secondary lg:p-26 md:p-20 p-10  '>
   <SubHeading>Latest Product</SubHeading>
   <SectionHeading> New Products On Market</SectionHeading>
   <div className="products grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 sm:gap-10 justify-center justify-items-center items-center">
    {
     products.slice(0, 6).map(product => <DisplayProducts
      key={product._id}
      product={product}
     ></DisplayProducts>)
    }
   </div>
  </div>
 );
};

export default Products;