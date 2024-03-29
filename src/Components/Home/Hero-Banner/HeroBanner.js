import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import heroBlob from '../../Assets/hero-banner.png'
import heroBlob from '../../Assets/hero-banner-0.jpg'

const HeroBanner = () => {

 return (
  <div className='hero-banner h-screen bg-[#ffb703] grid items-center align-center'
   style={{
   backgroundImage: `url(${heroBlob})`,
//    backgroundImage: 'url("https://i.ibb.co/mDDWckc/hero-banner-0-2.png")',
   backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
   backgroundColor: '#ffb703',
   backgroundSize: 'cover', width: '100%',
   opacity: '0.9.5'
   // backgroundColor: 'rgba(0,0,0,0.5)',


  }}>
   <div className='home-section w-2/4 grid text-secondary'>
    <div className="home-title grid pl-10">
     <h1 className="main-title lg:text-6xl md:text-5xl  md:text-5xl uppercase font-bold ">
      Hitachi Social innovation
      <br />
      is powering good
     </h1>
     <p className="main-dis min-w-min py-2 lg:tex-3xl sm:text-xs ">
      Hitachi and Hitachi Astemo Developed Thin-type Inverter Technology for
      <br />
      EVs That is More Compact and Energy Efficient From cutting to fastening,
      <br />
      we carry quality Ostromi hand tools for any job
     </p>
     <div className="main-btns flex pl-0 p-10 justify-spacebetwn">
      <button className="explore text-primary rounded-none bg-secondary font-bold w-40 h-14 rounded ">
       Get Start
       <FontAwesomeIcon icon={faArrowRight} className='pl-2'></FontAwesomeIcon>
      </button>
      <div className="watch-btn pl-10 flex items-center justify-items-center ">
       <button className="watch-video  flex items-center  justify-items-center  ">
        <div className='play-btn '>
         <FontAwesomeIcon icon={faRightToBracket} className='play-icon'></FontAwesomeIcon>
        </div>
        <Link to='/login' className='font-bold pl-3'>LogIn</Link>
       </button>
      </div>
     </div>
    </div>


   </div>
  </div>
 );
};

export default HeroBanner;
