import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import singUp from '../../../assets/Login/logIn.png'
import ReactReloadSpinier from '../../Animation/ReactReloadSpinier';
import useToken from '../../Hooks/useToken';

const SingUp = () => {
 // react form 
 const { register, handleSubmit, watch, formState: { errors } } = useForm();
 const [updateProfile, updating, updateError] = useUpdateProfile(auth);
 const navigate = useNavigate()
 // SingIn With Email Passwrod 
 const [
  createUserWithEmailAndPassword,
  user,
  loading,
  error,
 ] = useCreateUserWithEmailAndPassword(auth);

 const onSubmit = async data => {
  const email = data.email;
  const password = data.password;
  await createUserWithEmailAndPassword(email, password)
  await updateProfile({ displayName: data.name });

 }

 // SingIn With Google 
 const [singWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
 const loginWithGoogle = () => {
  singWithGoogle()
 }

 const [token] = useToken(user || gUser)

 let signInError;

  if (token) {
   navigate('/')
  }


 if (loading || gLoading || updating) {
  return <ReactReloadSpinier></ReactReloadSpinier>
 }

 if (error || gError || updateError) {
  signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
 }

 if (user || gUser) {
  console.log(user || gUser);
 }

 return (
  <div>
   <div class="hero min-h-screen bg-accent">
    <div class="hero-content flex flex-row-reverse ">
     <div class="text-center lg:text-left">
      <img className='w-full lg:block md:block hidden' src={singUp} alt="" />
     </div>
     <div class="card rounded-none flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
       <h1 class="text-5xl font-bold">Create An Account</h1>

       <form onSubmit={handleSubmit(onSubmit)} class="form-control">
        <label className="label">
         <span className="label-text">Name</span>
        </label>
        <input
         type="text"
         placeholder="Full Name" className="input input-bordered w-full max-w-xs rounded-none"{...register("name", {
          required: {
           value: true,
           message: 'Name is Required'
          }
         })}
        />
        <label className="label">
         {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
        </label>

        <label class="label">
         <span class="label-text">Email</span>
        </label>
        <input className='input input-bordered w-full max-w-xs rounded-none' type="email" placeholder="email" {...register("email", {
         required: {
          value: true,
          message: "Email is required"
         },
         pattern: {
          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
          message: "Email is not Valid"
         }
        })}  />

        <label label='label'>
         {errors.email?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.email.message}</span>}
         {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-600'>{errors.email.message}</span>}
        </label>

        <label class="label">
         <span class="label-text">Password</span>
        </label>
        <input className='input input-bordered w-full max-w-xs rounded-none' type="password" placeholder="password" {...register("password", {
         required: {
          value: true,
          message: "Password is required"
         },
         minLength: {
          value: 6,
          message: "Must be 6 characters or longer"
         },

        })} />
        <label className='label'>
         {errors.password?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.password.message}</span>}
         {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-600'>{errors.password.message}</span>}

        </label>

        {signInError}

        <label class="label">
         <Link to='/resetPass' class="label-text-alt link link-hover">Forgot password?</Link>
        </label>
        <div class="form-control mt-6">
         <input className='rounded-none' type='submit' value="SingUp" class="btn btn-primary rounded-none" />
        </div>
       </form>

       <label class="label">
        <p className='label-text-alt'>Already have an account? <Link to='/login' class="label-text-alt link link-hover underline text-neutral font-bold text-md">Login your account</Link></p>
       </label>
       <div class="form-control mt-6">
        <button onClick={loginWithGoogle} class="btn rounded-none btn-neutral rounded-none" >SingUp With Google</button>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default SingUp;