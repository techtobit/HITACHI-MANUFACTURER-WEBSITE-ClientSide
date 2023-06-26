import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddOrderedItems = () => {
  const [myProduct, setMyProduct] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://hitachi-tool.onrender.com/mycart`, {
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
      .then(data => setMyProduct(data));
  }, [navigate])

  return [myProduct, setMyProduct]
};

export default AddOrderedItems;