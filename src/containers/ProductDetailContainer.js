import React from 'react'
import { connect } from 'react-redux'
import ProductDetail from '../components/ProductDetail'
import {Link,IndexLink } from 'react-router'
import { addToCart } from '../actions'

const ProductDetailContainer=({products,currentProduct,onAddToCartClick})=> {

		return (
			<div className='detail-container'>
			<div className='nav'>
			<IndexLink to='/'><button>Browse</button></IndexLink>
			<br/>
			<Link to='/cart'><button>Cart</button></Link>
			</div>
				<ProductDetail 
				onAddToCartClick={onAddToCartClick}
				{...products[currentProduct.id]}
				 />
			</div>
			)
	
}


const mapStateToProps=state=>({
	products:state.products,
	currentProduct:state.currentProduct});

export default connect(
	mapStateToProps,
	{
		onAddToCartClick:addToCart
	}
	)(ProductDetailContainer);

