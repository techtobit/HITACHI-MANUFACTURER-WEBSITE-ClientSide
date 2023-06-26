import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useQueries, useQuery } from 'react-query';
import ReactReloadSpinier from '../../../Animation/ReactReloadSpinier';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const AddReviewModal = ({ item }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [user] = useAuthState(auth)
  const reviewName = user?.displayName;
  // const { item: product, isLoading } = useQuery('users', () => fetch(`https://hitachi-tool.onrender.com/products/${item._id}`).then(res => res.json()))
  // console.log( item);
  // if (isLoading) {
  //   return <ReactReloadSpinier></ReactReloadSpinier>
  // }


  const onSubmit = data => {
    const myReview = {
      userName: reviewName,
      name: item.name,
      price: item.price,
      dis: item.dis,
      img: item.img,
      review: data.review,
      retting: data.retting
    };

    console.log(myReview);

    axios.post(`https://hitachi-tool.onrender.com/userReview`, myReview)
      .then(response => {
        console.log(response)
        toast.success(`Dear ${reviewName}.Thanks For your Review`);
      })

    reset();
  };

  return (
    <div>
      <input type="checkbox" id="toggle-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box justify-center text-center">
          <h3 className='text-xl pb-2 font-semibold text-red-400'>Do you Want To Review?</h3>
          <div className='flex py-4 justify-center'>
            <p>Product : {item.name}</p>
          </div>
          <div className="review-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea class="textarea textarea-warning " placeholder="Review" {...register("review", { required: true })}></textarea>
              <br />
              <input type="number" placeholder="X⭐ Out of 5⭐" {...register("retting", {
                required: {
                  value: true,
                  message: "Retting is required"
                },
                maxLength: {
                  value: 1,
                  message: "Select a number 1 to 5"
                },

              })} class="input input-primary input-sm  max-w-xs" />
              <br />
              <label className='label justify-center text-center flex'>
                {errors.retting?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.retting.message}</span>}
                {errors.retting?.type === 'minLength' && <span className='label-text-alt text-red-600'>{errors.retting.message}</span>}
              </label>

              <div class="modal-action justify-center">
                <label for="toggle-modal" class="btn  btn-primary ">Cancel</label>
                <button type='submit' for="toggle-modal" class="btn  btn-success">ADD</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReviewModal;