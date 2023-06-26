import React, { useEffect, useState } from 'react';
import feedback from '../../../assets/elect.png'
import SectionHeading from '../../Shared/SectionHeading/SectionHeading';
import SubHeading from '../../Shared/SectionHeading/SubHeading';
import DisplayFeedback from './DisplayFeedback';

const Feedback = () => {

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/userReview`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <div className='py-20 bg-accent'>
      <SubHeading>Feedback</SubHeading>
      <SectionHeading>User Testimonial </SectionHeading>
      <div className='grid grid-cols-3'>
        {
          reviews.map(review => <DisplayFeedback
            key={review._id}
            review={review}
          ></DisplayFeedback>)
        }
      </div>
      <div>
        <SubHeading>See More</SubHeading>
      </div>
    </div>
  );
};

export default Feedback;