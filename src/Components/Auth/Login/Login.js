import React, { useEffect } from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import LoginImg from '../../../assets/Login/logIn.png'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import ReactReloadSpinier from '../../Animation/ReactReloadSpinier';
import useToken from '../../Hooks/useToken';
import InputField from '../../Shared/input';


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // login with google 
  const [singWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const loginWithGoogle = () => {
    singWithGoogle()
  }

  // login with email 
  const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
  const onSubmit = data => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password)
    console.log(email, password);
  }

  const [token] = useToken(user || gUser)

  console.log('my token is', token);
  //Remainder last route
  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // if (token) {
  //   // navigate(from, { replace: true })
  //   navigate('/')
  // }

  useEffect(() => {
    if (user || gUser) {
      navigate(from, { replace: true })
    }
  }, [from, gUser, navigate, user])

/*   useEffect(() => {
    if (token) {
      navigate(from, { replace: true })
    }
  }, [from, navigate, token])
 */


  if (loading || gLoading) {
    return <ReactReloadSpinier></ReactReloadSpinier>
  }

  if (error || gError) {
    signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
  }


  return (
    <div>
      <div class="hero min-h-screen bg-accent">
        <div class="hero-content grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-between lg:gap-[25%] ">
          <div class="text-center lg:text-left">
            <img className='w-full lg:block md:block hidden' src={LoginImg} alt="" />
          </div>
          <div class="card rounded-none flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body rounded-none">
              <h1 class="text-5xl font-bold">Login now!</h1>

              <form onSubmit={handleSubmit(onSubmit)} class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input className='input rounded-none input-bordered' type="email" placeholder="email" {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required"
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Email is not Valid"
                  }
                })} />

                <label label='label'>
                  {errors.email?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.email.message}</span>}
                  {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-600'>{errors.email.message}</span>}
                </label>

                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input className='input rounded-none input-bordered' type="password" placeholder="password" {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required"
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer"
                  },

                })}  />
                <label className='label'>
                  {errors.password?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.password.message}</span>}
                  {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-600'>{errors.password.message}</span>}
                </label>

                <label class="label">
                  <Link to='/resetPass' class="label-text-alt link link-hover">Forgot password?</Link>
                </label>
                <div class="form-control mt-6">
                  <input type='submit' value="login" class="btn rounded-none  btn-primary" />
                </div>
              </form>
              {signInError}
              <label class="label">
                <p className='label-text-alt'>Don't have an account? <Link to='/singup' class="label-text-alt link link-hover underline text-neutral font-bold text-md">Create an account</Link></p>
              </label>
              <div class="form-control mt-6">
                <button onClick={loginWithGoogle} class="btn rounded-none  btn-neutral" >login With Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;