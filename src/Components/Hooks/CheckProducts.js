import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth'

const CheckProducts = () => {
  const { product } = useParams()
  const [checkProduct, setCheckProduct] = useState([]);
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://hitachi-tool.onrender.com/products/${product}`, {
      method: "GET",
      headers: {
        "authorization": `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth)
          localStorage.removeItem("accessToken");
          navigate('/')
        }
        return res.json()
      })
      .then(data => setCheckProduct(data))
  }, [navigate, product])
  return [checkProduct, setCheckProduct]
};

export default CheckProducts;