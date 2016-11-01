import React from 'react'
import { connect } from 'react-redux'
import {getVisibleProducts} from '../reducers/products'
import {Link} from 'react-router'
import FilterList from '../components/FilterList'
import ProductsDisplay from '../components/ProductsDisplay'




const ProductBrowseContainer =({products,filters,dispatch}) =>{

		return (
			<div className='browse'>
				<div className='nav'>
				<Link to='/cart'><button>Cart</button></Link>
				</div>
				<div className='box'>
					<FilterList  dispatch={dispatch} filters={filters.filtersList} activeFilters={filters.visibilityFilters} />
					<ProductsDisplay  dispatch={dispatch} products={getVisibleProducts(products,filters.visibilityFilters)} />
				</div>
			</div>
			)
	}


const mapStateToProps=state=>({products:state.products,filters:state.filters});

export default connect(mapStateToProps)(ProductBrowseContainer);
