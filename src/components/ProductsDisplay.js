import React from 'react'
import ProductCard from './ProductCard'

const ProductsDisplay=({products,onAddToCartClick,onCardClick})=>{

	return (
		<ul className='display'>
		{
			
			products.map(product=>{
			
			
			  return (
			  	<ProductCard  
			  		onCardClick={onCardClick}
			  		onAddToCartClick={onAddToCartClick}
			  		key={product.id} 
			  		{...product} 
			  	/>
			  )
			}
			)

		}
		</ul>
	);
};


export default ProductsDisplay