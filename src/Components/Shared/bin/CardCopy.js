/* import React, { useState, useEffect } from 'react';
import {
 CardElement,
 Elements,
 useStripe,
 useElements,
} from '@stripe/react-stripe-js';

const cardCopy = ({ cart }) => {
 const stripe = useStripe();
 const elements = useElements();
 const [cardError, setCardError] = useState('')
 const [success, setSuccess] = useState('')
 const [clientSecret, setClientSecret] = useState('');


 const total = cart.total
 console.log(total)

 useEffect(() => {
  fetch('https://hitachi-tool.onrender.com/create-payment-intent', {
   method: "POST",
   headers: {
    "content-type": "application/json",
    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
   },
   body: JSON.stringify()
  })
   .then(res => res.json(total))
   .then(data => {
    console.log("cart ", data)
    console.log("cart secret is", data?.clientSecret)
    if (data?.clientSecret) {
     setClientSecret(clientSecret);
    }
   })
 }, [clientSecret, total])

 const handleSubmit = async (e) => {
  e.preventDefault()

  if (!stripe || !elements) {
   return
  }
  const card = elements.getElement(CardElement);

  if (card == null) {
   return;
  }

  const { error, paymentMethod } = await stripe.createPaymentMethod({
   type: 'card',
   card,
  });

  setCardError(error?.message || " ")
  setSuccess('');
  //confirm card error
  const { paymentIntent, intentError } = await stripe.confirmCardPayment(
   clientSecret,
   {
    payment_method: {
     card: card,
     billing_details: {
      name: 'Jenny Rosen',
     },
    },
   },
  );

  if (intentError) {
   setCardError(intentError?.massage)
  }
  else {
   setCardError('')
   console.log(paymentIntent);
   setSuccess('Success')
  }

 }

 return (
  <>
   <form onSubmit={handleSubmit}>
    <CardElement
     options={{
      style: {
       base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
         color: '#aab7c4',
        },
       },
       invalid: {
        color: '#9e2146',
       },
      },
     }}
    />
    <button className='btn btn-success bt-xm' type="submit" disabled={!stripe || !clientSecret}>
     Pay
    </button>
   </form>
   {
    cardError && <label className='text-red-400 label-text-alt'>{cardError}</label>
   }
   {
    success && <label className='text-green-400 label-text-alt'>{cardError}</label>
   }
  </>
 );
};

export default cardCopy; */