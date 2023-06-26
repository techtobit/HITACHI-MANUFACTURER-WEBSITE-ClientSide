import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import '../../Home/Products/DisplayProduct.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import ReactReloadSpinier from '../../Animation/ReactReloadSpinier';

const DisplayAllProducts = ({ product }) => {
 const { _id, name, img, price, quantity } = product;
 const [style, setStyle] = useState({ display: 'none' });
 const [user, loading] = useAuthState(auth)
 const navigate = useNavigate();

 //navigate to buy products 
 const handelPurchase = id => {
  if (loading) {
   return <ReactReloadSpinier></ReactReloadSpinier>
  }
  else if (!user) {
   navigate('/login')
  }
  else {
   navigate(`/products/${id}`)
  }

 }
 return (
  <div >
   <div class="card lg:w-80 md:w-fit bg-base-100 shadow-xl"
    onMouseEnter={e => {
     setStyle({
      display: 'block',
      text: 'center',
      transition: "delay: 1s",
      // transition: '0.3s'
     });
    }}
    onMouseLeave={e => {
     setStyle({
      display: 'none',
      transition: '0.3s'
     })
    }}>
    <figure className=''><img className='product-img' src={img} alt="product" /></figure>
    <div class="card-body">
     <h3 class="card-title">{name}</h3>
     <div className="card-data grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2">
      <div class="badge badge-primary text-neutral font-bold">Price : ${price}</div>
      <div class="badge badge-accent text-neutral font-bold border-1 border-primary">Stock: ${quantity}</div>
     </div>
     <button onClick={() => handelPurchase(_id)} class="card-actions w-full lg:justify-center py-2 " style={style} >
      <div class="btn btn-primary w-full text-neutral font-bold">
       <FontAwesomeIcon icon={faCartArrowDown} className='text pr-2'></FontAwesomeIcon>
       Place Oder
      </div>
     </button>
    </div>
   </div>
  </div>
 );
};

export default DisplayAllProducts;