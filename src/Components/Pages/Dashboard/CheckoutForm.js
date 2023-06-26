import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const CheckoutForm = ({ cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState([]);
  const [transitionId, setTransitionId] = useState([]);

  const [user] = useAuthState(auth);
  const name = user?.displayName;
  const email = user?.email;
  const { total, } = cart

  useEffect(() => {
    fetch(`https://hitachi-tool.onrender.com/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ total })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      })
  }, [total])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    setCardError(error?.message || '');

    setSuccess(' ');
    //confirm card payment
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email
          },
        },
      },
    );

    if (intentError) {
      setCardError(intentError?.message);

    }
    else {
      setCardError('');
      setTransitionId(paymentIntent.id)
      setSuccess("Your Payment is Complied")
      toast.success(`Thanks For Pay💗 ! You TransitionId ${paymentIntent.id
        }`)
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
        <div className='pt-4'>
          <button type="submit" className='btn btn-success btn-sm ' disabled={!stripe || !clientSecret}>
            Pay
          </button>
        </div>
      </form>

      {
        cardError && <p className=' text center text-sm text-red-500'>{cardError}</p>
      }
      {
        (success === 'Your Payment is Complied') && <div className=' text center text-sm text-green-500'>
          <p>{success}</p>
          <p>Your transitionId is <span className='text-primary'>{transitionId}</span></p>
        </div>
      }
    </>
  );
};

export default CheckoutForm;