import React from 'react'
import { addToCart} from '../actions'

const ProductDetail=({name,price,desc,measurement,image,id,dispatch})=>{
return (
		<div className='product'>
		<h1>{name}</h1>
		<div className='detail'>
			<img src={'src/assets/'+image}/>
			<div>
		 	   <div>{measurement}</div>
		 	   <div className='price'>{'$'+price}</div>
		 	   <p>{desc}</p>
		 	   <button onClick={()=>dispatch(addToCart(id))}>
		 	   Add to Cart
		 	   </button>
		    </div>
		</div>
		</div>
	);
};


export default ProductDetail;