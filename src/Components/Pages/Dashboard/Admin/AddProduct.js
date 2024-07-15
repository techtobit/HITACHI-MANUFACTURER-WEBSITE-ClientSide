import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    const imgApiKey = '54c9f604b140c2e56e2b65138a3d3965';
    const img = data.img[0];
    const formData = new FormData();
    formData.append("image", img);
    console.log(data);

    const url = `https://api.imgbb.com/1/upload?key=${imgApiKey}`

    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const img = data.data.url
          const product = {
            name: data.name,
            dis: data.dis,
            price: data.price,
            quantity: data.quantity,
            minOder: data.minOder,
            img: img
          }

          console.log(product);

          // axios.post(`https://hitachi-server-side.vercel.app/products`, product)
          //   .then(response => {
          //     console.log(response);
          //     toast.success('New Product Successfully Add')
          //   })
        }
        console.log("fetch data", data);
      })
    reset()
  };



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=''>
        <input type="text" placeholder="Product Name"  {...register("name", { required: true })} class="input  input-warning input-sm w-96 max-w-xs" />
      </div>
      <br />
      <div>
        <input type="number" placeholder="Net Price"  {...register("price", { required: true })} class="input  input-warning input-sm w-full max-w-xs" />
      </div>
      <div>
        <br />
        <input type="number" placeholder="quantity"  {...register("quantity", { required: true })} class="input w-96 input-warning  input-sm mw-96 max-w-xs" />
      </div>

      <br />
      <div>
        <input type="number" placeholder="minOder"  {...register("minOder", { required: true })} class="input  input-warning input-sm w-full max-w-xs" />
      </div>
      <br />
      <div className=''>
        <textarea class="textarea textarea-warning w-full" placeholder="Description" {...register("dis", { required: true })}></textarea>
      </div>
      <div className=''>
        <input type='file' class="textarea textarea-warning w-full" placeholder="Product" {...register("img", { required: true })}></input>
      </div>
      <div class="modal-action justify-center">
        <input value='Add Product' type='submit' for="toggle-modal" class="btn btn-full w-full btn-primary" />
      </div>

    </form>
  );
};

export default AddProduct;