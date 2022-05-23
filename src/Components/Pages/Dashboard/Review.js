import React from 'react';
import AddOrderedItems from '../../Hooks/AddOrderedItems';
import AddReview from './AddReview';

const Review = () => {
 const [myProduct, setMyProduct] = AddOrderedItems();
 return (
  <div class="hero min-h-screen bg-accent">
   <div class="">
    <table class="table w-full">
     <thead>
      <tr>
       <th>Products</th>
       <th>Name</th>
       <th>Total Order</th>
       <th>Total Price</th>
       <th>Add Review</th>

      </tr>
     </thead>
     {
      myProduct.map(item => <AddReview
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