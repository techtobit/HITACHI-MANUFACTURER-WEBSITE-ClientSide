import { useEffect, useState } from 'react';

const LoadProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fierce-savannah-77217.herokuapp.com/products`, {
      method: "GET",
      headers: {
        "authorization": `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return [products]
};

export default LoadProducts;