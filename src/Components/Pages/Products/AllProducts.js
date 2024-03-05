import React, { useEffect, useState } from 'react';
import LoadProducts from '../../Hooks/LoadProducts';
import SectionHeading from '../../Shared/SectionHeading/SectionHeading';
import SubHeading from '../../Shared/SectionHeading/SubHeading';
import SharedDisplayProducts from '../../Shared/Products/SharedDisplayProducts';
import ReactReloadSpinier from '../../Animation/ReactReloadSpinier';

const AllProducts = () => {
	// const [products, setProducts] = useState([])
	const [products] = LoadProducts()
	console.log(products);
	const [loading, setLoading] = useState(true)

	const handleReload = () => {
    window.location.reload();
  };


	return (
		<div className='bg-secondary lg:p-26 md:p-20 p-10  '>
		{
			loading && products.length > 0 ? (
				<div className="products grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 sm:gap-10 justify-center justify-items-center items-center">
						{
							products.map(product => <SharedDisplayProducts
								key={product._id}
								product={product}
							></SharedDisplayProducts>)
						}
				</div>
			) : (
				!loading ? (<ReactReloadSpinier></ReactReloadSpinier>) : (<button onClick={handleReload} className='btn-sm bg-secondary border-[.5px] border-neutral  flex justify-center items-center px-2 -10 ml-[44%] my-[4%] '>Load Data Again</button>)
			)
		}

{/* 
		<SubHeading>Latest Product</SubHeading>
			<SectionHeading> New Products On Market</SectionHeading>

			{
				products && products.length > 0 ? (
					<div className="products grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 sm:gap-10 justify-center justify-items-center items-center">
						{
							products.map(product => <SharedDisplayProducts
								key={product._id}
								product={product}
							></SharedDisplayProducts>)
						}
					</div>
				) : (
					
						!loading ? (<button onClick={handleReload} className='btn-sm bg-secondary border-[.5px] border-neutral  flex justify-center items-center px-2 ml-[44%] '>Load Data Again</button>)
						: (<ReactReloadSpinier></ReactReloadSpinier>)
					


				)
			} */}

		</div>
	);
};

export default AllProducts;