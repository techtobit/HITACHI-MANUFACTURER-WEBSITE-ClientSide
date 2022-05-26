import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import axios from 'axios';
const Profile = () => {
 const [user] = useAuthState(auth)

 const { register, handleSubmit, reset, formState: { errors } } = useForm();
 const onSubmit = data => {
  axios.post(`http://localhost:5000/userProfile`, data)
   .then(response => {
    console.log(response)
    toast.success(`Your Profile Updated`);
   })

  reset();
 }
 return (
  <div class="hero min-h-screen bg-accent">
   <div class="hero-content flex-col lg:flex-row">
    <div class="text-center lg:text-left lg:pr-10 md:pr-10">
     <h1 class="text-4xl font-bold uppercase py-5">My profile</h1>
     <hr />
     <div className='user-profile flex algin-center items-center'>
      <div class="avatar">
       <div class="w-24 rounded-xl">
        <img src="https://api.lorem.space/image/face?hash=64318" />
       </div>
      </div>
      <div className='flex flex-col'>
       <h2 className='tex-2xl text-primary pl-5'>{user.displayName}</h2>
       <p className='tex-md text-neutral pl-5'>{user.email}</p>
       <p className='tex-md text-neutral pl-5'>Create : {user.metadata.creationTime}</p>
      </div>
     </div>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm  bg-accent">

     <div class="card-body">
      <h3 className='text-xl'>Update Profile</h3>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>

       <label class="label">
        <span class="label-text">Education</span>
       </label>
       <input type="text" placeholder="Education" {...register("education", { required: true })} class="input input-bordered input-sm w-full max-w-xs" />
       <label class="label">
        <span class="label-text">City</span>
       </label>
       <input type="text" placeholder="Where you live" {...register("city", { required: true })} class="input input-bordered input-sm w-full max-w-xs" />

       <label class="label">
        <span class="label-text">phone number</span>
       </label>
       <input type="number" placeholder="(+880)1xxxxxx" {...register("phone", { required: true })} class="input input-bordered input-sm w-full max-w-xs" />
       <label class="label">
        <span class="label-text">Social</span>
       </label>
       <input type="text" placeholder="Any Social Link" {...register("social", { required: true })} class="input input-bordered input-sm w-full max-w-xs" />
       <div className='pt-4'>
        <button type='submit' class="btn btn-primary w-full">Update</button>
       </div>
      </form>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Profile;