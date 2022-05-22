import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import singUp from '../../../assets/Login/logIn.png'

const SingUp = () => {
 // react form 
 const { register, handleSubmit, watch, formState: { errors } } = useForm();
 const [user, loading, error] = useAuthState(auth);

 const navigate = useNavigate()
 // SingIn With Email Passwrod 
 const [
  createUserWithEmailAndPassword,
  Euser,
  Eloading,
  Eerror,
 ] = useCreateUserWithEmailAndPassword(auth);
 const onSubmit = data => {
  const email = data.email;
  const password = data.password;
  createUserWithEmailAndPassword(email, password)
  console.log(email, password);
 }

 if (user) {
  navigate('/home')
 }


 // SingIn With Google 
 const [singWithGoogle, Guser, Gloading] = useSignInWithGoogle(auth);
 const loginWithGoogle = () => {
  singWithGoogle()
  navigate('/')
 }

 return (
  <div>
   <div class="hero min-h-screen bg-accent">
    <div class="hero-content flex flex-row-reverse justify-between ">
     <div class="text-center lg:text-left">
      <img className='w-full lg:block md:block hidden' src={singUp} alt="" />
     </div>
     <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
       <h1 class="text-5xl font-bold">Create An Account</h1>

       <form onSubmit={handleSubmit(onSubmit)} class="form-control">
        <label class="label">
         <span class="label-text">Email</span>
        </label>
        <input type="email" placeholder="email" {...register("email", {
         required: {
          value: true,
          message: "Email is required"
         },
         pattern: {
          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
          message: "Email is not Valid"
         }
        })} class="input input-bordered" />

        <label label='label'>
         {errors.email?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.email.message}</span>}
         {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-600'>{errors.email.message}</span>}
        </label>

        <label class="label">
         <span class="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" {...register("password", {
         required: {
          value: true,
          message: "Password is required"
         },
         minLength: {
          value: 6,
          message: "Must be 6 characters or longer"
         },

        })} class="input input-bordered" />
        <label className='label'>
         {errors.password?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.password.message}</span>}
         {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-600'>{errors.password.message}</span>}

        </label>

        <label class="label">
         <Link to='/resetPass' class="label-text-alt link link-hover">Forgot password?</Link>
        </label>
        <div class="form-control mt-6">
         <input type='submit' value="SingUp" class="btn btn-primary" />
        </div>
       </form>

       <label class="label">
        <p className='label-text-alt'>Already have an account? <Link to='/login' class="label-text-alt link link-hover underline text-neutral font-bold text-md">Login your account</Link></p>
       </label>
       <div class="form-control mt-6">
        <button onClick={loginWithGoogle} class="btn btn-neutral" >SingUp With Google</button>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default SingUp;