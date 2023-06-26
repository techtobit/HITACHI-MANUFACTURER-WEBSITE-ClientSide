import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Payment.css';
const stripePromise = loadStripe('pk_test_51L32KLCsQIHP5V5pO5zs1Mqu1tcstEOMngwtrtftvk3aUWXS91oilRcWhNEIK4vTTEZ6houmF4VijlGlGHI7FWEJ00jJLqyxcU');


const Payment = () => {
  const { user } = useAuthState(auth)
  const { product } = useParams();


  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/${product}`)
      .then(res => res.json())
      .then(data => setCart(data));
  }, [product])


  // form controle

  return (
    <>
      <div class="card card-side bg-base-100  shadow-xl">
        <figure><img className='payment-css' src={cart.img} alt="Movie" /></figure>
        <div class="card-body">
          <h2 class="card-title">{cart.name}</h2>
          <p className='font-bold text-neutral'>Product Price : <span className='text-primary'>{cart.price}</span></p>
          <hr />
          <div className='flex '>
            <p className='font-medium text-neutral'>You Pay : <span className='text-primary font-bold'>{cart.total}</span></p>
            <p className='font-medium text-neutral'>You Order : <span className='text-primary font-bold'>{cart.quantity}</span></p>
          </div>
          <hr />
          <div>
            <h3>Pay With</h3>
          </div>
          <div className='py-5'>
            <Elements stripe={stripePromise}>
              <CheckoutForm cart={cart} />
            </Elements>
          </div>
        </div>
      </div>
    </>


  );
};

export default Payment;