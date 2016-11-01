import React from 'react'
import ProductCard from './ProductCard'

const ProductsDisplay=({products,dispatch})=>{

	return (
		<ul className='display'>
		{
			
			products.map(product=>{
			
			
			  return (<ProductCard  dispatch={dispatch}key={product.id} {...product} />)
			}
			)

		}
		</ul>
	);
};


export default ProductsDisplay