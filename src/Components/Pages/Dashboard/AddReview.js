import React from 'react';

const AddReview = ({ item }) => {
 const { img, name, quantity, total } = item;
 return (
  <tbody>
   <tr>
    <td>
     <div class="avatar">
      <div class="mask mask-squircle w-12 h-12">
       <img src={img} alt="Avatar Tailwind CSS Component" />
      </div>
     </div>
    </td>
    <td>{name}</td>
    <td>Ordered : {quantity}</td>
    <td>Total Price :{total}</td>
    <td>
     <button class="btn btn-xs">Add Review</button>
    </td>
   </tr>
  </tbody>
 );
};

export default AddReview;