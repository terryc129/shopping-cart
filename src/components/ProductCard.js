import React from 'react'
import {Link} from 'react-router'
import { goToDetail, addToCart} from '../actions'





const ProductCard=({name,measurement,price,image,id,dispatch})=>{

  return (
  	 <div className='card'>
  	    <div className='content'>
  	    <Link to='/pdp' 
  			onClick={()=>dispatch(goToDetail(id))}>
  	 	<img src={'src/assets/'+image}/>
  	 	<div >{name}</div>
		<div>{measurement}</div>
		<div className='price'>{'$'+price}</div>
		</Link>
		</div>
		<button onClick={()=>dispatch(addToCart(id))}>
		Add to Cart
		</button>
	 </div>
	);
};


export default ProductCard

				