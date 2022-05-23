import React, { useEffect, useState } from 'react';

const AddOrderedItems = () => {
 const [myProduct, setMyProduct] = useState([]);

 useEffect( () => {
  fetch(`http://localhost:5000/mycart`)
  .then(res => res.json())
  .then(data => setMyProduct(data));
 } ,[])

 return [myProduct, setMyProduct]
};

export default AddOrderedItems;