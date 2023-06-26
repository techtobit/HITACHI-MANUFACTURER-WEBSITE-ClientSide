import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
const AddrForPurchase = () => {
 const { item } = useParams()
 const [user, loading] = useAuthState(auth)
 console.log(item);

 // const [addAddersCart, setAddAddresCart] = useState([]);
 // useEffect(() => {
 //  fetch(`http://localhost:5000/${item}`)
 //   .then(res => res.json())
 //   .then(data => setAddAddresCart(data));
 // }, [item])

 // console.log(addAddersCart);




 // form controle
 const { register, handleSubmit, watch, formState: { errors } } = useForm();
 const onSubmit = data => {
  console.log(data);
 }


 return (

  <div class="hero min-h-screen  bg-accent">
   <div class="hero-content flex-col lg:flex-row">
    <div class="card   shadow-xl">
     <figure class="px-10 pt-10">
      <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
     </figure>
     <div class="card-body items-center text-center">
      <h2 class="card-title"></h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions">
       <button class="btn btn-primary">Buy Now</button>
      </div>
     </div>
    </div>

    <div className='flex justify-center'
    // style={{
    //  backgroundImage: `url(${paymentBlob})`,
    //  backgroundColor: '',
    //  backgroundPosition: 'center',
    //  backgroundSize: 'cover',
    //  backgroundRepeat: 'no-repeat',
    //  width: '100vw',
    //  height: '90vh',
    //  opacity: "0.8"
    // }}
    >
     <div class="card flex-shrink-0 w-full shadow-2xl bg-secondary ">
      <div class="card-body ">

       <form onSubmit={handleSubmit(onSubmit)} class="form-control">
        <label className="label">
         <span className="label-text">Name</span>
        </label>
        <input
         type="text" disabled value={user?.displayName}
         placeholder="Full Name" className="input input-bordered w-full max-w-xs"{...register("name", {})} />


        <label class="label">
         <span class="label-text">Email</span>
        </label>
        <input type="email" disabled value={user?.email} placeholder="email" {...register("email", {

        })} class="input input-bordered" />
        <label class="label">
         <span class="label-text">Phone</span>
        </label>
        <input type="password" placeholder="(+880)1xxxxxxx" {...register("phone", {
         required: {
          value: true,
          message: "Phone Number is required"
         },
         minLength: {
          value: 11,
          message: "Must be 6 characters or longer"
         },

        })} class="input input-bordered" />
        <label className='label'>
         {errors.password?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.password.message}</span>}
         {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-600'>{errors.password.message}</span>}

        </label>

        <label class="label">
         <span class="label-text">Address</span>
        </label>
        <input type="text" placeholder="address" {...register("address", {
         required: {
          value: true,
          message: "Address is required"
         },
         pattern: {
          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
          message: "address is not Valid"
         }
        })} class="input input-bordered" />

        <label label='label'>
         {errors.address?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.address.message}</span>}
         {errors.address?.type === 'pattern' && <span className='label-text-alt text-red-600'>{errors.address.message}</span>}
        </label>

        <div class="form-control mt-6">
         <input type='submit' value="Payment" class="btn btn-primary" />
        </div>
       </form>

      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default AddrForPurchase;