import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link } from 'react-router-dom';

const MinNavBars = () => {
 const [user] = useAuthState(auth)
 console.log(user);
 return (
  <div class="navbar min-h-min lg:grid grid-cols-2 justify-between ms:grid hidden bg-secondary text-neutral border-b-2 px-20">
   <div class="flex-1">
    <p className='text-sm pl-4'>
     <FontAwesomeIcon className='text-primary' icon={faEarthAsia}></FontAwesomeIcon>
     <span className='pl-2 text-neutral font-thin'>World Wide Shipping</span>
    </p>
    <p className='text-sm pl-4'>
     <p className='text-sm pl-2'>
      <FontAwesomeIcon className='text-primary' icon={faPhone}></FontAwesomeIcon>
      <span className='pl-2 text-neutral font-thin'>(+880)18281564</span>
     </p>
    </p>

    <p className='text-sm pl-4'>
     <FontAwesomeIcon className='text-primary' icon={faEnvelope}></FontAwesomeIcon>
     <span className='pl-2 text-neutral font-thin'>nurthern2016@gmail.com</span>
    </p>

   </div>
   <div class="justify-end">
    

   </div>
  </div>
 );
};

export default MinNavBars;