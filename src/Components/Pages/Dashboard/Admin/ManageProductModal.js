import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const ManageProductModal = ({ deleteProduct }) => {

 const handelDeleteCart = id => {
  const url = `https://hitachi-tool.onrender.com/products/${id}`
  axios.delete(url, id)
   .then(response => {
    console.log(response)
    toast.success('Product Deleted')

   })
  setTimeout(function () {
   window.location.reload(1);
  }, 4000);
 }
 return (
  <div>
   <input type="checkbox" id="toggle-modal" class="modal-toggle" />
   <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box justify-center text-center">
     <h3 className='text-xl pb-2 font-semibold text-red-400'>Are Your Sure? Want To Delete Cart?</h3>
     <div class="avatar">
      <div class="w-24 rounded-xl">
       <img src={deleteProduct.img} />
      </div>
     </div>
     <h3 class="font-bold text-lg">{deleteProduct.name}</h3>
     <div className='flex py-4 justify-center'>
      <p>Product Price : ${deleteProduct.price}</p>
      <p className='pl-2'>In Stock :{deleteProduct.quantity}</p>
     </div>
     <div class="modal-action justify-center">
      <label for="toggle-modal" class="btn  btn-primary ">Cancel</label>
      <button for="toggle-modal" onClick={() => handelDeleteCart(deleteProduct._id)} class="btn  btn-error">Delete</button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default ManageProductModal;