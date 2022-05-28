import React from 'react';
import { useForm } from 'react-hook-form';

const PaymentForm = () => {
 const { register, handleSubmit, watch, formState: { errors } } = useForm()
  ();
 const onSubmit = data => {
  // console.log(data);
 }
 return (

  <div class="hero min-h-screen  w-full bg-accent ">

   <div class="card w-96  shadow-2xl ">
    <div class="card-body w-full ">
     <form onSubmit={handleSubmit(onSubmit)} class="form-control">
      <label className="label">
       <span className="label-text">Product</span>
      </label>
      <input
       type="text" disabled value=''
       placeholder="Full Name" className="input input-bordered w-full max-w-xs"{...register("name", {})} />
      <label class="label">
       <span class="label-text">Bill</span>
      </label>
      <input type="email" disabled value=' ' placeholder="email" {...register("email", {

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
 );
};

export default PaymentForm;