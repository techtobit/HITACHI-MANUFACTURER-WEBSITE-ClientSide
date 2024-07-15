import React from 'react';
import ReactSlick from 'react-image-magnify'
import ReactImageMagnify from 'react-image-magnify';
import blob from '../../../assets/elect.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import CheckProducts from '../../Hooks/CheckProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate();
  const [checkProduct] = CheckProducts()

  const handelPurchase = id => {
    if (!user) {
      navigate('/login')
    }
    else {
      navigate(`/products/cart/${id}`)
    }
  }

  const star= true;
  
  return (
    <div className=' h-screen grid grid-cols-2 justify-center justify-items-center items-center'>
      <div className='product-image w-96 h-96 border-[0.5px]  border-neutral'>
        <ReactImageMagnify {...{
          smallImage: {
            alt: `${checkProduct.name}`,
            isFluidWidth: true,
            src: `${checkProduct.img}`,
            sizes: '(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw',
          },
          largeImage: {

            src: `${checkProduct.img}`,
            width: 1600,
            height: 1600,
            
          },
          enlargedImageContainerDimensions: {
            width: '150%',
            height: '100%'
            
          },
          shouldUsePositiveSpaceLens: true,
          isHintEnabled: true
        }} />
      </div>
      <div>
        <h6 class="">Model</h6>
        <h1 class="text-xl font-bold ">{checkProduct.name}</h1>
        <h6 class="">Price : <span className=''>${checkProduct.price}</span></h6>
        <div className='rateing pb-2'>
        Total Rateing
						<span
							className=''
							style={{ cursor: 'pointer', fontSize: '20px', color: star ? 'gold' : 'gray' }}
						>
							★
						</span>
				</div>
        <button onClick={() => handelPurchase(checkProduct._id)} class="card-actions bg-primary w-96 h-11 flex items-center lg:justify-center"  >
								<FontAwesomeIcon icon={faCartArrowDown} className='text pr-[1px]'></FontAwesomeIcon>
								Buy Now
				</button>
      </div>

    </div>
  );
};

export default ProductDetails;