import axios from 'axios';
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

const stripePromise = loadStripe('pk_test_51L32KLCsQIHP5V5pO5zs1Mqu1tcstEOMngwtrtftvk3aUWXS91oilRcWhNEIK4vTTEZ6houmF4VijlGlGHI7FWEJ00jJLqyxcU');

const Payment = () => {
  const { user } = useAuthState(auth)
  const { product } = useParams();


  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/mycart/${product}`)
      .then(res => res.json())
      .then(data => setCart(data));
  }, [product])


  // form controle

  return (

    <div class="card w-96 bg-base-100 shadow-xl ">
      <div class="card-body">
        <Elements stripe={stripePromise}>
          <CheckoutForm cart={cart} />
        </Elements>
      </div>
    </div>

  );
};

export default Payment;