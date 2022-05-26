import React from 'react';
import { Link } from 'react-router-dom';
import bgNotFoundBlobs from '../../../assets/NotFound/bg-pageNotFound.png'

const PageNotFound = () => {
 return (
  <div class="hero min-h-screen" style={{
   backgroundImage: 'url("https://i.ibb.co/yXxSKYb/bg-page-Not-Found.png")',
   backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
   backgroundSize: 'cover', width: '100%',
   // opacity: '0.9.5'


  }}>
   <div class="hero-overlay bg-opacity-30"></div>
   <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
     <h1 class="mb-5 text-5xl font-bold uppercase text-secondary">This page is not Found</h1>
     <p class="mb-5">check your destination url and try again!</p>
     <Link to='/' class="btn btn-primary uppercase">Back To Home</Link>
    </div>
   </div>
  </div>
 );
};

export default PageNotFound;