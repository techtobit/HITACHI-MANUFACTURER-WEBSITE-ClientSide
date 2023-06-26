import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faDollarSign, faTrashCan, faCartShopping, faArrowRotateRight, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const DisplayMangeProduct = ({ setDeleteProduct, item}) => {
 const { img, name ,price, quantity } = item
 return (
  <tbody className='overflow-x-auto  overflow-y-auto'>
   <tr>
    <td>
     <div class="avatar">
      <div class="mask mask-squircle w-12 h-12">
       <img src={img} alt="Avatar Tailwind CSS Component" />
      </div>
     </div>
    </td>
    <td>{name}</td>
    <td><FontAwesomeIcon className='pr-2' icon={faDollarSign}></FontAwesomeIcon>
     {price}
    </td>
    <td><FontAwesomeIcon className='pr-2' icon={faCartShopping}></FontAwesomeIcon>
     {quantity}
    </td>

    <td>
     {
      <label for="toggle-modal" onClick={() => setDeleteProduct(item)} class="btn modal-button  btn-xs border-0 bg-accent text-red-600 hover:text-white hover:bg-red-500">
       <FontAwesomeIcon icon={faTrashCan} className='pr-2'></FontAwesomeIcon>
       Deleted Product
      </label>
     }

    </td>

   </tr>
  </tbody>
 );
};

export default DisplayMangeProduct;