import React from 'react';
import SubHeading from './SubHeading';

const SectionHeading = ({ children }) => {
 return (
  <div className="product-heading text-center pb-10">
   <h2 className='' >
    {children}
   </h2>
  </div>

 );
};

export default SectionHeading;