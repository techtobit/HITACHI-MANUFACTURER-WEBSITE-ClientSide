import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const Modal = ({ deleteCart }) => {
  const { _id, img, name, quantity, total } = deleteCart;
  console.log(deleteCart);

  const handelDeleteCart = id => {
    const url = `https://hitachi-tool.onrender.com/${id}`
    axios.delete(url, id)
      .then(response => {
        console.log(response)
        toast.success('Cart Deleted')

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
              <img src={img} />
            </div>
          </div>
          <h3 class="font-bold text-lg">{name}</h3>
          <div className='flex py-4 justify-center'>
            <p>Grand Total : ${total}</p>
            <p className='pl-2'>Total Quantity :{quantity}</p>
          </div>
          <div class="modal-action justify-center">
            <label for="toggle-modal" class="btn  btn-primary ">Cancel</label>
            <button for="toggle-modal" onClick={() => handelDeleteCart(_id)} class="btn  btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;