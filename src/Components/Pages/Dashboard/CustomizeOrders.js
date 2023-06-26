import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faDollarSign, faTrashCan, faCartShopping, faArrowRotateRight, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CustomizeOrders = ({ item, setDeleteCart }) => {
  const { _id, img, name, price, position, quantity, total } = item;
  const navigate = useNavigate();

  const handelPayment = id => {
    navigate(`payment/${id}`)
  }

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
        <td>
          <FontAwesomeIcon className='pr-2' icon={faTruckFast}></FontAwesomeIcon>
          {position}
        </td>
        <td><FontAwesomeIcon className='pr-2' icon={faDollarSign}></FontAwesomeIcon>
          {price}
        </td>
        <td><FontAwesomeIcon className='pr-2' icon={faCartShopping}></FontAwesomeIcon>
          {quantity}
        </td>
        <td><FontAwesomeIcon className='pr-2' icon={faDollarSign}></FontAwesomeIcon>
          {total}
        </td>
        <td>
          {
            (position === "unpaid") &&
            <label for="toggle-modal" onClick={() => setDeleteCart(item)} class="btn modal-button  btn-xs border-0 bg-accent text-red-600 hover:text-white hover:bg-red-500">
              <FontAwesomeIcon icon={faTrashCan} className='pr-2'></FontAwesomeIcon>
              Cancel Order
            </label>
          }
          {
            (position === "paid") && <Link to=''>
              <button class="btn btn-xs border-0 bg-accent text-primary hover:text-white hover:bg-primary">
                <FontAwesomeIcon icon={faArrowRotateRight} className='pr-2'></FontAwesomeIcon>
                Refund</button>
            </Link>
          }
          {
            (position === "shipped") && <Link to='review'>
              <button class="btn btn-xs btn-accent ">
                <FontAwesomeIcon icon={faStarHalfStroke} className='pr-2'></FontAwesomeIcon>
                Add Review</button>
            </Link>
          }

        </td>
        <td>
          {
            (position === "unpaid") &&
            <button onClick={() => handelPayment(_id)} class="btn btn-xs border-0 bg-accent text-green-600 hover:text-white hover:bg-green-500">Payment</button>
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