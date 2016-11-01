import React from 'react'
import { connect } from 'react-redux'
import {getProductsAdded} from '../reducers/cart'
import CartProduct from '../components/CartProduct'
import {IndexLink } from 'react-router'


const CartContainer=({productsAdded,quantityList,dispatch})=>{

	return (
		<div className='cart'>
			<div className='nav'>
				<IndexLink to='/'><button>Browse</button></IndexLink>
			</div>
			<div>
				<ul className='list'>
				{
					
					productsAdded.map(product=>
						<CartProduct dispatch={dispatch}quantity={quantityList[product.id]} key={ product.id } {...product}  />
					)
		
				}
				</ul>
			</div>
		</div>
	);

};


const mapStateToProps=state=>({
	productsAdded:getProductsAdded(state.cart.addedList,state.products),
	quantityList:state.cart.quantity});

export default connect(mapStateToProps)(CartContainer);


