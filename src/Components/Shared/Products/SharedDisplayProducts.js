import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faEye  } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import './DisplayProduct.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import ReactReloadSpinier from '../../Animation/ReactReloadSpinier';

const SharedDisplayProducts = ({ product }) => {
	const { _id, name, img, price, quantity } = product;
	const [style, setStyle] = useState({ display: 'none' });
	const [user, loading] = useAuthState(auth)
	const navigate = useNavigate();

	const [rating, setRating] = useState(2);
	const handleRatingChange = (newRating) => {
		setRating(newRating);
	};

	const handelPurchase = id => {
		if (!user) {
			navigate('/login')
		}
		else {
			navigate(`/products/${id}`)
		}

	}
	return (
		<div className=' ' >
			{
				!_id ? (<ReactReloadSpinier></ReactReloadSpinier>) : (
					''
				)}
			<p className='tooltips absolute mt-[-10px] ml-[10px] z-10 u ppercase text-sm bg-neutral text-accent px-2'>New</p>
			<div class="card rounded-none relative  lg:w-80 h-96 md:w-fit bg-base-100 ">
				<div className='rateing absolute ml-[65%] pt-[3px] z-10 '>
					{[1, 2, 3, 4, 5].map((star) => (
						<span
							className=''
							key={star}
							style={{ cursor: 'pointer', fontSize: '20px', color: star <= rating ? 'gold' : 'gray' }}
							onClick={() => handleRatingChange(star)}
						>
							★
						</span>
					))}
				</div>

				<div className='border-[0.5px]   relative  border-neutral hover:border-primary border-opacity:90 rounded-none'
					onMouseEnter={e => {
						setStyle({
							display: 'block',
							text: 'center',
							transition: "delay: 1s",
						});
					}}
					onMouseLeave={e => {
						setStyle({
							display: 'none',
							transition: '0.3s'
						})
					}}
				>
					<figure className='m-5 object-cover  '>
						<img className='product-img   ' src={img} alt="product" />
						<button onClick={() => handelPurchase(_id)} class="card-actions  rounded-none w-[100%] h-[100%]  backdrop-opacity-10 backdrop-invert bg-white/30  absolute lg:justify-center" style={style} >
							<div class="btn  rounded-none  btn-primary w-[50%] text-neutral font-bold">
								<FontAwesomeIcon icon={ faEye} className='text pr-2'></FontAwesomeIcon>
								View Details
							</div>
						</button>
					</figure>
				</div>
				<div class="py-[0.5">
					<h3 class="product-model">name</h3>
					<h3 class="product-name font-bold overflow-hidden ">{name}</h3>
				</div>

			</div>
		</div>
	);
};

export default SharedDisplayProducts;