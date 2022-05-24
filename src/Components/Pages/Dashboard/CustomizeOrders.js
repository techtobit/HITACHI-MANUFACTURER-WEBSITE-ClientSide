import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faDollarSign, faBoxOpen, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from '../../Shared/Modal/Modal';

const CustomizeOrders = ({ item, setDeleteCart }) => {
  const { img, name, price, position, quantity, total } = item;

  return (
    <tbody className='overflow-x-auto '>
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
          {position}</td>
        <td><FontAwesomeIcon className='pr-2' icon={faDollarSign}></FontAwesomeIcon>
          {price}</td>
        <td><FontAwesomeIcon className='pr-2' icon={faCartShopping}></FontAwesomeIcon>
          {quantity}</td>
        <td><FontAwesomeIcon className='pr-2' icon={faDollarSign}></FontAwesomeIcon>
          {total}</td>
        <td>
          {
            (position === "unpaid") &&
            <label for="toggle-modal" onClick={() => setDeleteCart(item)} class="btn modal-button  btn-xs border-0 bg-accent text-red-600 hover:text-white hover:bg-red-500">Delete Cart</label>
          }
          {
            (position === "paid") && <Link to=''>
              <button class="btn btn-xs border-0 bg-accent text-primary hover:text-white hover:bg-primary">Refund</button>
            </Link>
          }
          {
            (position === "shipped") && <Link to='review'>
              <button class="btn btn-xs btn-accent ">Add Review</button>
            </Link>
          }

        </td>
        <td>
          {
            (position === "unpaid") && <Link to='review/:payment'>
              <button class="btn btn-xs border-0 bg-accent text-green-600 hover:text-white hover:bg-green-500">Payment</button>
            </Link>
          }
          {
            (position === "paid" || position === "shipped") &&
            <button class="btn btn-xs hover:bg-green-400 border-0  text-white bg-green-400">Paid</button>
          }
        </td>
      </tr>
    </tbody>
  );
};

export default CustomizeOrders;