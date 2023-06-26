import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faMoneyCheckDollar, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React, { createContext, useEffect, useState } from 'react';
import CheckProducts from '../../Hooks/CheckProducts';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from '../Dashboard/CheckoutForm';
const stripePromise = loadStripe('pk_test_51L32KLCsQIHP5V5pO5zs1Mqu1tcstEOMngwtrtftvk3aUWXS91oilRcWhNEIK4vTTEZ6houmF4VijlGlGHI7FWEJ00jJLqyxcU');

const CheckedProduct = () => {
  const [checkProduct] = CheckProducts();
  const [user] = useAuthState(auth)


  const [input, setInput] = useState(0);
  const [cart, setCart] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);


  let id = checkProduct._id
  let price = parseInt(checkProduct.price);
  let quantity = parseInt(checkProduct.quantity);
  let order = parseInt(checkProduct.minOder);
  let position = 'unpaid';

  const increaseQuantity = e => {
    let num = e.target.value;
    if (quantity >= num && order <= num) {
      setInput(num)
    }
  }
  useEffect(() => {
    let totalPrice = input * price;
    setCartPrice(totalPrice)
  }, [input, price])

  console.log(cartPrice);


  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {

    let product = {
      user: data.name,
      email: data.email,
      phone: data.phone,
      city: data.city,
      address: data.address,
      name: checkProduct.name,
      img: checkProduct.img,
      total: cartPrice,
      position: position
    }


    if (cartPrice) {
      console.log(cartPrice);
      const url = `http://localhost:5000/`;
      setCart(product)
      axios.post(url, product)
        .then(response => {
          if (response.data.success) {
            toast.success('Product Successfully Add')
            setCartPrice(0)
          }
          else {
            toast.error('This Product Already Add')
          }

        })
    }
  }


  const navigate = useNavigate()
  const handelPayment = id => {
    navigate(`/payment/${id}`)
  }



  return (

    <div className='bg-accent'>
      {/* //product display here  */}
      <div class="hero min-h-screen bg-accent ">
        <div class="hero-content flex-col lg:flex-row ">
          <div className=' bg-accent '>
            <img src={checkProduct.img} class="max-w-sm " />
            <div className='py-5'>
              <h1 class="text-3xl font-bold pb-2">{checkProduct.name}</h1>
              <h3 class="text-2xl font-bold">Price : <span className='text-2xl font-bold'>${checkProduct.price}</span></h3>
              <h4 class="text-xl  ">In Stock : <span className='text-xl '>{checkProduct.quantity}</span></h4>
              <h3 class="text-xl ">MinOrder : <span className='text-xl '>{checkProduct.minOder}</span></h3>
            </div>
          </div>
          <div className='lg:px-20 '>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 class="text-2xl font-bold pb-2">Shipping Details</h1>
              <hr />

              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input type="text" value={user?.displayName} readOnly  {...register("name", { required: true })} class="input bg-gray-200 input-bordered input-sm w-96 max-w-xs" />
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="email" value={user?.email} readOnly {...register("email", { required: true })} class="input  bg-gray-200 input-bordered input-sm w-96 max-w-xs" />

              <label class="label">
                <span class="label-text">phone number</span>
              </label>
              <input type="number" placeholder="(+880)1xxxxxx" {...register("phone", { required: true })} class="input input-bordered input-sm w-96 max-w-xs" />
              <label class="label">
                <span class="label-text">City</span>
              </label>
              <input type="text" placeholder="City" {...register("city", { required: true })} class="input input-bordered input-sm w-96 max-w-xs" />
              <label class="label">
                <span class="label-text">Warehouse Address</span>
              </label>
              <input type="text" placeholder="address" {...register("address", { required: true })} class="input input-bordered input-sm w-96 max-w-xs" />
              <label class="label">
                <span class="label-text font-bold">Order quantity</span>
              </label>
              <input type="number" min="0" onKeyUp={increaseQuantity} placeholder="quantity" {...register("quantity", { required: true })} class="input input-bordered input-sm w-96 max-w-xs" />
              <label class="label">
                <span class="label-text font-bold">You Pay</span>
              </label>
              <input type='number' value={cartPrice} readOnly {...register("total", { required: true })} class="input  bg-gray-200 input-bordered input-sm w-96 max-w-xs" />

              <div className='pt-4'>
                <button type='submit' disabled={!cartPrice && !input} class="btn btn-primary w-full">Add To Cart</button>
              </div>
            </form>
            <div className='py-5'>
              <h3 className='text-center font-bold text-xl py-3'>Make Payment</h3>
              <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CheckedProduct;