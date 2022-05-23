import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faMoneyCheckDollar, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import CheckProducts from '../../Hooks/CheckProducts';

const CheckedProduct = () => {
 const [checkProduct] = CheckProducts();
 return (
  <div>
   <div class="hero min-h-screen bg-accent">
    <div class="hero-content flex-col lg:flex-row">
     <img src={checkProduct.img} class="max-w-sm rounded-lg shadow-2xl" />
     <div>
      <div className=''>
       <h1 class="text-5xl font-bold">{checkProduct.name}</h1>
       <h3 class="text-2xl font-bold">Price : <span className='text-2xl font-bold'>${checkProduct.price}</span></h3>
       <h4 class="text-xl  ">In Stock : <span className='text-xl '>{checkProduct.quantity}</span></h4>
       <h3 class="text-xl ">MinOrder : <span className='text-xl '>{checkProduct.minOder}</span></h3>
      </div>

      <div>
       <h4>Order quantity : </h4>
       <div className="flex py-2">

        <div className=''>
         <button class="btn bg-secondary border-0  btn-sm">
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
         </button>
        </div>
        <div className='pl-2' >
         <input type="number" class="input px-5 input-bordered input-sm w-28 max-w-xs" />
        </div>
        <div className='px-2'>
         <button class="btn bg-secondary border-0 btn-sm">
          <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
         </button>
        </div>
       </div>
      </div>
      <div className='lg:flex md:flex'>
       <div className='py-2'>
        <button class="btn btn-primary ">
         <FontAwesomeIcon icon={faCartPlus} className="px-2"></FontAwesomeIcon>
         Add To Cart</button>

       </div>
       <div className='py-2  lg:pl-4 sm:pl-4 pl-0'>
        <button class="btn btn-primary ">
         <FontAwesomeIcon icon={faMoneyCheckDollar} className="px-2"></FontAwesomeIcon>
         Purchase</button>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default CheckedProduct;