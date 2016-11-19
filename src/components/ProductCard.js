import React from 'react'
import {Link} from 'react-router'






const ProductCard=({name,measurement,price,image,id,onAddToCartClick,onCardClick})=>{

  return (
  	 <div className='card'>
  	    <div className='content'>
  	    <Link to='/pdp' 
  			onClick={()=>onCardClick(id)}>
  	 	<img src={'src/assets/'+image}/>
  	 	<div >{name}</div>
		<div>{measurement}</div>
		<div className='price'>{'$'+price}</div>
		</Link>
		</div>
		<button onClick={()=>onAddToCartClick(id)}>
		Add to Cart
		</button>
	 </div>
	);
};


export default ProductCard

				