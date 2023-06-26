import React, { useEffect, useState } from 'react';
import AddOrderedItems from '../../Hooks/AddOrderedItems';
import AddReview from './AddReview';

const Review = () => {
  const [myProduct, setMyProduct] = AddOrderedItems();

  const [addReview, setAddReview] = useState([]);

  const url = `http://localhost:5000/addReview`
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAddReview(data))

  }, [addReview, url])



  return (
    <div class="hero min-h-screen bg-accent">
      <div class="">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Products</th>
              <th>Name</th>
              <th>Status</th>
              <th>Total Order</th>
              <th>Total Price</th>
              <th>Add Review</th>

            </tr>
          </thead>
          {
            addReview.map(item => <AddReview
              key={item._id}
              item={item}
            ></AddReview>)
          }
        </table>
      </div>
    </div>
  );
};

export default Review;