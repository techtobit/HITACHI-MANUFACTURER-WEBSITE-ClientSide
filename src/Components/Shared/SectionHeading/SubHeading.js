import React from 'react';

const SubHeading = ({ children }) => {
 return (
  <div className="product-heading text-center">
   <span className='tex-2xl uppercase font-bold'>{children}</span>
  </div>
 );
};

export default SubHeading;