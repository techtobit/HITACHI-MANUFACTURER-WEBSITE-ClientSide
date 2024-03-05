import React from 'react';
import LoadProducts from '../../Hooks/LoadProducts';
import SectionHeading from '../../Shared/SectionHeading/SectionHeading';
import SubHeading from '../../Shared/SectionHeading/SubHeading';
import SharedDisplayProducts from '../../Shared/Products/SharedDisplayProducts';

const AllProducts = () => {
	const [products] = LoadProducts();

	return (
		<div className='bg-secondary lg:p-26 md:p-20 p-10  '>
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
					<button onClick={() => LoadProducts()} className='btn-sm bg-secondary border-[.5px] border-neutral  flex justify-center items-center px-2 ml-[44%] '>Load Data Again</button>
				)
			}

		</div>
	);
};

export default AllProducts;