import React from 'react'
import {Link} from 'react-router'
import { goToDetail } from '../actions'

const CartProduct=({quantity,name,price,measurement,image,dispatch,id})=>{
	return (

		<div className='card'>
		    <Link to='/pdp' 
  			onClick={()=>dispatch(goToDetail(id))}>
				<img src={'src/assets/'+image}/>
  	 			<div>{name}</div>
				<div>{measurement}</div>
				<div className='price'>{'$'+price}</div>
				<div>QTY: {quantity}</div>
			</Link>
   		</div>
 	);
};


export default CartProduct