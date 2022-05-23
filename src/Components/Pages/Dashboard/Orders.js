import React from 'react';
import AddOrderedItems from '../../Hooks/AddOrderedItems';
import CustomizeOrders from './CustomizeOrders';

const Orders = () => {
 const [myProduct, setMyProduct] = AddOrderedItems();

 return (
  <div class="hero min-h-screen bg-accent">
   <div class="overflow-x-auto">
    <table class="table w-full overflow-x-auto">
     <thead>
      <tr>
       <th>Products</th>
       <th>Name</th>
       <th>Position</th>
       <th>Product Price</th>
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
      ></CustomizeOrders>)
     }
    </table>
   </div>
  </div>
 );
};

export default Orders;