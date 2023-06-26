import React from 'react';
import SectionHeading from '../../Shared/SectionHeading/SectionHeading';
import SubHeading from '../../Shared/SectionHeading/SubHeading';

const Subscribe = () => {
 return (
  <div>
   <div class="hero h-80 "
    style={{
     backgroundImage: 'url("https://i.ibb.co/L0X4f2L/industrial-hero-banner.jpg")',
     backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
     // backgroundSize: 'cover', 
     width: '100%',
    }}
   >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center grid grid-cols-1  text-neutral-content">
     <div>
      <SubHeading>SUBSCRIBE NEWSLETTER</SubHeading>
      <SectionHeading >
       <h2 className='text-primary'>Get Every Latest News</h2></SectionHeading>
     </div>
     <div class="w-96 flex -mt-10">
      <input type="email" placeholder="email" required class="input input-bordered input-warning w-full max-w-xs" />
      <div className='pl-5'>
       <button className='btn btn-primary '>Subscribe</button>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Subscribe;