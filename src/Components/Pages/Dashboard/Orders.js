import React, { useState } from 'react';
import AddOrderedItems from '../../Hooks/AddOrderedItems';
import Modal from '../../Shared/Modal/Modal';
import CustomizeOrders from './CustomizeOrders';

const Orders = () => {
 const [myProduct, setMyProduct] = AddOrderedItems();
 const [deleteCart, setDeleteCart] = useState(null);

 return (
  <div class="hero min-h-screen bg-accent items-start overflow-y-auto">
   <div class="overflow-x-auto overflow-y-auto">
    <table class="table w-full overflow-x-auto overflow-y-auto">
     <thead >
      <tr>
       <th>Products</th>
       <th>Name</th>
       <th>Status</th>
       <th>Item Price</th>
       <th>Total Order</th>
       <th>Total Bill</th>
       <th>Cancel Order</th>
       <th>Payment</th>
      </tr>
     </thead>
     {
      myProduct.map(item => <CustomizeOrders
       key={item._id}
       item={item}
       setDeleteCart={setDeleteCart}
      ></CustomizeOrders>)
     }
    </table>

    {deleteCart && <Modal deleteCart={deleteCart}></Modal>}

   </div>
  </div>
 );
};

export default Orders;