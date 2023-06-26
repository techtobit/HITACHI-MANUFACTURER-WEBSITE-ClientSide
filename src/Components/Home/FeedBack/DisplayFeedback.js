import React from 'react';

const DisplayFeedback = ({ review }) => {
 console.log(review);
 return (
  <div>
   <div class="card card-compact w-96 flex">
    <div className='flex flex-col'>
     <p className='tex-2xl text-primary pl-5'>User : {review.userName}</p>
     <p className='tex-md text-neutral pl-5'>Retting : {review.retting}⭐ </p>

    </div>
   </div>
   <div class="card-body w-50 h-90">
    <p>{review.review}</p>
   </div>
  </div>

 );
};

export default DisplayFeedback;