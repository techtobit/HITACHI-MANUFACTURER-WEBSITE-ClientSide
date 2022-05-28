import React from 'react';
import './About.css'
import myAvatar from '../../../Assets/AboutMe/my-avatar.png'
import graduate from '../../../Assets/AboutMe/education.png'
import rungIng from '../../../Assets/AboutMe/study.png'
import html from '../../../Assets/AboutMe/html.svg'
import css from '../../../Assets/AboutMe/css.svg'
import javascript from '../../../Assets/AboutMe/javascript.svg'
import react from '../../../Assets/AboutMe/react.svg'
import firebase from '../../../Assets/AboutMe/firebase.svg'
import tailwind from '../../../Assets/AboutMe/tailwind-css.svg'
import bootstrap from '../../../Assets/AboutMe/bootstrap.svg'
import mongodb from '../../../Assets/AboutMe/mongodb.svg'
import wordpress from '../../../Assets/AboutMe/wordpress.svg'


const About = () => {
 return (
  <div className='grid justify-center py-10'>
   <div className="my-avatar grid justify-center ">
    <img className='bg-blue-100 p-1' src={myAvatar} alt="" />
   </div>
   <div className="profile grid justify-center bg-slate-100 rounded py-5 ">
    <h2 className='text-3xl font-bold'>Ashraf Uddin</h2>
    <p>I Love to Learn Something New</p>
   </div>

   <div className="about-me grid grid-cols-2 bg-slate-100 rounded drop-shadow-xl">

    <div className="academic-info">
     <h1 className='text-2xl font-bold pt-5 pl-16'>Academic Info</h1>

     <div className="academi grid justify-start">
      <div className="hsc flex p-10">
       <div className=" flex items-center ">
        <div className="img-icon">
         <img src={graduate} alt="" />
        </div>
        <div className="academi-name pl-5">
         <h2 className='font-bold text-lg'>Sir Ashutosh Govt. College
          <br />
          <span className='font-normal'> Since 2017-2019 (Science)</span>
         </h2>
        </div>
       </div>
      </div>

      <div className="BSc flex p-10">
       <div className=" flex items-center ">
        <div className="img-icon">
         <img src={rungIng} alt="" />
        </div>
        <div className="academi-name pl-5">
         <h2 className='font-bold text-lg'>Sir Ashutosh Govt. College
          <br />
          <span className='font-normal'>Degree on BSc || National University</span>
         </h2>
        </div>
       </div>
      </div>

     </div>
    </div>

    <div className="connected-with">
     <h1 className='text-2xl font-bold p-5 '>Connected With</h1>

     <div className="language-syntax ">
      <div className="icon grid grid-cols-3 p-4 ">
       <img src={html} alt="" className="icon-img hover:scale-105 delay-50 duration-100" />
       <img src={css} alt="" className="icon-img hover:scale-105 delay-50 duration-100" />
       <img src={javascript} alt="" className="icon-img hover:scale-105 delay-50 duration-100" />
      </div>

      <div className="icon grid grid-cols-3 p-4">
       <img src={bootstrap} alt="" className="icon-img hover:scale-105 delay-50 duration-100" />
       <img src={tailwind} alt="" className="icon-img hover:scale-105 delay-50 duration-100" />
       <img src={react} alt="" className="icon-img hover:scale-105 delay-50 duration-100" />

      </div>

      <div className="icon grid grid-cols-3 p-4">
       <img src={firebase} alt="" className="icon-img hover:scale-105 delay-50 duration-100" />
       <img src={mongodb} alt="" className="icon-img hover:scale-105 delay-50 duration-100" />
       <img src={wordpress} alt="" className="icon-img hover:scale-105 delay-50 duration-100" />
      </div>

     </div>

    </div>
   </div>
  </div>
 );
};

export default About;