import React from 'react';

const DisplayFeedback = ({ review }) => {
  console.log(review);
  return (
    <div className='px-4 md:px-6 lg:px-10 py-10'>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body h-[310px] overflow-hidden mb-10">
          <p className='card-title text-primary pl-5'>User : {review.userName}</p>
          <p className='tex-md text-neutral pl-5'>{review.review}</p>
        </div>
      </div>
    </div>

  );
};

export default DisplayFeedback;