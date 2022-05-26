import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
 const { register, handleSubmit, watch, formState: { errors } } = useForm();
 const onSubmit = data => {
  const myReview = data.review;
  axios.post(`http://localhost:5000/products`, myReview)
   .then(response => console.log(response))
 };
 return (
  <form onSubmit={handleSubmit(onSubmit)}>
   <input type="text" placeholder="Product Name"  {...register("name", { required: true })} class="input input-bordered input-sm w-full max-w-xs" />
   <textarea class="textarea textarea-warning" placeholder="Description" {...register("dis", { required: true })}></textarea>
   <input type="number" placeholder="quantity"  {...register("quantity", { required: true })} class="input input-bordered input-sm w-full max-w-xs" />
   <input type="number" placeholder="Net Price"  {...register("price", { required: true })} class="input input-bordered input-sm w-full max-w-xs" />
   <input type="number" placeholder="minOder"  {...register("minOder", { required: true })} class="input input-bordered input-sm w-full max-w-xs" />
   <div class="modal-action justify-center">
    <label for="toggle-modal" class="btn  btn-primary ">Cancel</label>
    <button type='submit' for="toggle-modal" class="btn  btn-success">ADD</button>
   </div>

  </form>
 );
};

export default AddProduct;