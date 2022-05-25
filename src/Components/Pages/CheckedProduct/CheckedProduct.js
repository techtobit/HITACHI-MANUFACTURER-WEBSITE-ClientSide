import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faMoneyCheckDollar, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React, { createContext, useEffect, useState } from 'react';
import CheckProducts from '../../Hooks/CheckProducts';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const CheckedProduct = () => {
  const [checkProduct] = CheckProducts();


  const [input, setInput] = useState(0);
  const [purchase, setPurchase] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);


  let price = parseInt(checkProduct.price);
  let quantity = parseInt(checkProduct.quantity);
  let order = parseInt(checkProduct.minOder);
  let position = 'unpaid';

  const increaseQuantity = e => {
    let num = e.target.value;
    if (quantity >= num && order <= num) {
      setInput(parseInt(num))
    }
  }
  useEffect(() => {
    let totalPrice = input * price;
    setCartPrice(totalPrice)
  }, [input, price])

  const dQuantity = n => {
  }
  const iQuantity = n => {
  }


  const hadelAddtoCart = () => {

    let product = {
      name: checkProduct.name,
      img: checkProduct.img,
      price: checkProduct.price,
      quantity: input,
      total: cartPrice,
      position: position
    }

    if (cartPrice) {
      const url = `http://localhost:5000/mycart`;
      setPurchase(product)
      axios.post(url, product)
        .then(response => {
          if (response.data.success) {
            toast.success('Product Successfully Add')
            setCartPrice(0)
          }
          else {
            toast.error('This Product Already Add')
          }

        })
    }

  }


  const navigate = useNavigate();
  const handelPayment = id => {
    navigate(`/payment/${id}`)
  }




  return (

    <div className='bg-accent'>
      {/* //product display here  */}
      <div class="hero min-h-screen bg-accent ">
        <div class="hero-content flex-col lg:flex-row ">
          <img src={checkProduct.img} class="max-w-sm rounded-lg shadow-2xl" />
          <div className='lg:px-20 '>
            <div className=''>
              <h1 class="text-5xl font-bold pb-2">{checkProduct.name}</h1>
              <h3 class="text-2xl font-bold">Price : <span className='text-2xl font-bold'>${checkProduct.price}</span></h3>
              <h4 class="text-xl  ">In Stock : <span className='text-xl '>{checkProduct.quantity}</span></h4>
              <h3 class="text-xl ">MinOrder : <span className='text-xl '>{checkProduct.minOder}</span></h3>
            </div>

            <div>
              <h4>Order quantity : </h4>
              <div className="flex py-2">

                <div className=''>
                  <button onClick={iQuantity} class="btn bg-secondary border-0  btn-sm">
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                  </button>
                </div>
                <div className='pl-2' >

                  <input type="number" min="0" onKeyUp={increaseQuantity} class="input px-5 input-bordered input-sm w-28 max-w-xs" />
                </div>
                <label className='label'>
                </label>
                <div className='px-2'>
                  <button onClick={dQuantity} class="btn bg-secondary border-0 btn-sm">
                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </div>
            <div className=''>
              <label className='text-xl pr-2  font-bold '>Total</label>
              <input readOnly value={cartPrice} className="input px-5  text-green-600 text-xl font-bold input-sm w-28 max-w-xs" />
            </div>

            <div className='lg:flex md:flex'>
              <div className='py-2'>
                <button class="btn btn-primary " onClick={hadelAddtoCart}>
                  <FontAwesomeIcon icon={faCartPlus} className="px-2"></FontAwesomeIcon>
                  Add To Cart</button>

              </div>
              <div className='py-2  lg:pl-4 sm:pl-4 pl-0'>
                <button onClick={() => handelPayment(checkProduct._id)} class="btn btn-primary ">
                  <FontAwesomeIcon icon={faMoneyCheckDollar} className="px-2"></FontAwesomeIcon>
                  Purchase</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CheckedProduct;