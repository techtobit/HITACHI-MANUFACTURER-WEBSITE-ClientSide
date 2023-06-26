import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import dril from '../../../assets/inovation-1.webp'

const Innovation = () => {


 return (
  <div class="hero min-h-screen">
   <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="carousel carousel-center rounded-box">
     <div class="carousel-item">
      <img src="https://i.ibb.co/fv0J12L/Power-Generator-02.png" alt="Pizza" />
     </div>
    </div>
    <div>
     <h1 class="text-5xl font-bold">Our Latests Innovation</h1>
     <div className="aboutIt py-2">
      <h2>Silent Katrina 5500E</h2>
      <p>- Type: Diesel Generator</p>
      <p>- Starting System: Electric Start</p>
      <p>- Engine: 4-Stroke</p>
      <p>- Fuel Tank Capacity: Diesel, 25L</p>
      <p>- Operating time: 6 hours continuously</p>
     </div>
     <button class="btn btn-primary py-2">Explore More
      <FontAwesomeIcon className='pl-2' icon={faArrowRightLong}></FontAwesomeIcon>
     </button>
    </div>
   </div>
  </div>


 );
};

export default Innovation;