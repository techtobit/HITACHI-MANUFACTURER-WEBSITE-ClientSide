import React from 'react';

const CustomizeOrders = ({ item }) => {
 const { img, name, price, position, quantity, total } = item;
 return (
  <tbody className='overflow-x-auto'>
   <tr>
    <td>
     <div class="avatar">
      <div class="mask mask-squircle w-12 h-12">
       <img src={img} alt="Avatar Tailwind CSS Component" />
      </div>
     </div>
    </td>
    <td>{name}</td>
    <td>{position}</td>
    <td>{price}</td>
    <td>{quantity}</td>
    <td>{total}</td>
    <td>
     <button class="btn btn-xs border-0 bg-accent text-red-600 hover:text-white hover:bg-red-500">Cancel Order</button>
    </td>
    <td>
     <button class="btn btn-xs border-0 bg-accent text-green-600 hover:text-white hover:bg-green-500">Payment</button>
    </td>
   </tr>
  </tbody>
 );
};

export default CustomizeOrders;