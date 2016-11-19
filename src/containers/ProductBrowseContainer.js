import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getVisibleProducts} from '../reducers/products'
import {Link} from 'react-router'
import FilterList from '../components/FilterList'
import ProductsDisplay from '../components/ProductsDisplay'
import { addToCart,setVisibilityFilter,goToDetail } from '../actions'




class ProductBrowseContainer extends Component {

	render(){
			
		const { products,filters,onAddToCartClick,onFilterTick,onCardClick}=this.props;
			return (
					<div className='browse'>
						<div className='nav'>
						<Link to='/cart'><button>Cart</button></Link>
						</div>
						<div className='box'>
							<FilterList 
							 onFilterTick={onFilterTick} 
							 filters={filters.filtersList} 
							 activeFilters={filters.visibilityFilters}
							 />
							<ProductsDisplay  
								onCardClick={onCardClick}
								onAddToCartClick={onAddToCartClick}
							    products={getVisibleProducts(products,filters.visibilityFilters)}
							 />
						</div>
					</div>
					)
		}
	}


const mapStateToProps=state=>({products:state.products,filters:state.filters});
/*
const mapDispatchToProps=dispatch=>({
	onAddToCartClick(id) {
		dispatch(addToCart(id))
	},
	onFilterTick(name,value){
		dispatch(setVisibilityFilter(name,value))
	},

	onCardClick(id) {
		dispatch(goToDetail(id))
	}
})
*/
//shorthand of the code above
const mapDispatchToProps={
	onAddToCartClick: addToCart,
	onFilterTick: setVisibilityFilter,
	onCardClick: goToDetail
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductBrowseContainer);
