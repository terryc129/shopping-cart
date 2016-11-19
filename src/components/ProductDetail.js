import React from 'react'


const ProductDetail=({name,price,desc,measurement,image,id,onAddToCartClick})=>{
return (
		<div className='product'>
		<h1>{name}</h1>
		<div className='detail'>
			<img src={'src/assets/'+image}/>
			<div>
		 	   <div>{measurement}</div>
		 	   <div className='price'>{'$'+price}</div>
		 	   <p>{desc}</p>
		 	   <button onClick={()=>onAddToCartClick(id)}>
		 	   Add to Cart
		 	   </button>
		    </div>
		</div>
		</div>
	);
};


export default ProductDetail;