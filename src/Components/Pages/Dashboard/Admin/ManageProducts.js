import React, { useState } from 'react';
import LoadProducts from '../../../Hooks/LoadProducts';
import DisplayMangeProduct from './DisplayMangeProduct';
import ManageProductModal from './ManageProductModal';

const ManageProducts = () => {
 const [products] = LoadProducts()
 const [deleteProduct, setDeleteProduct] = useState([]);
 console.log(deleteProduct);
 return (
  <div class="hero min-h-screen bg-accent items-start overflow-y-auto">
   <div class="overflow-x-auto overflow-y-auto">
    <table class="table w-full overflow-x-auto overflow-y-auto">
     <thead >
      <tr>
       <th>Products</th>
       <th>Name</th>
       <th>Item Price</th>
       <th>In Stock</th>
       <th>Delete Product</th>
      </tr>
     </thead>
     {
      products.map(item => <DisplayMangeProduct
       key={item._id}
       item={item}
       setDeleteProduct={setDeleteProduct}
      ></DisplayMangeProduct>)
     }
    </table>

    {deleteProduct && <ManageProductModal deleteCart={deleteProduct}></ManageProductModal>}

   </div>
  </div>
 );
};

export default ManageProducts;