import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faDollarSign, faTrashCan, faCartShopping, faArrowRotateRight, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';


import React, { useState } from 'react';
import AddReviewModal from './AddReview/AddReviewModal';


const AddReview = ({ item }) => {
 const { _id, img, name, position, quantity, total, price } = item;

 const [addReview, setAddReview] = useState('');
 return (
  <tbody className='items-start'>
   <tr>
    <td>
     <div class="avatar">
      <div class="mask mask-squircle w-12 h-12">
       <img src={img} alt="Avatar Tailwind CSS Component" />
      </div>
     </div>
    </td>
    <td>{name}</td>
    <td>
     <FontAwesomeIcon className='pr-2' icon={faTruckFast}></FontAwesomeIcon>
     {position}
    </td>
    <td><FontAwesomeIcon className='pr-2' icon={faCartShopping}></FontAwesomeIcon>
     {quantity}
    </td>
    <td><FontAwesomeIcon className='pr-2' icon={faDollarSign}></FontAwesomeIcon>
     {total}
    </td>
    <td>
     <label for="toggle-modal" onClick={() => setAddReview(_id)} class="btn modal-button rounded-none  btn-xs border-0 btn btn-xs btn-accent ">
      <FontAwesomeIcon icon={faStarHalfStroke} className='pr-2'></FontAwesomeIcon>
      Add Review
     </label>
    </td>
   </tr>
   {addReview && <AddReviewModal
    item={item}
   ></AddReviewModal>}
  </tbody>
 );
};

export default AddReview;