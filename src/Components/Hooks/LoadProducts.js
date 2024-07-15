import { useEffect, useState } from 'react';

const LoadProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://hitachi-server-side.vercel.app/products`, {
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