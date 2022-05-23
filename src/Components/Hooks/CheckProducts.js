import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CheckProducts = () => {
 const {product} = useParams()
 const [checkProduct, setCheckProduct] = useState([]);

 useEffect( () => {
  fetch(`http://localhost:5000/products/${product}`)
  .then(res => res.json())
  .then(data => setCheckProduct(data))
 } ,[product])
 return [checkProduct, setCheckProduct]
};

export default CheckProducts;