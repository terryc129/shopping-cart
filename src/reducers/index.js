import { combineReducers } from 'redux'
import products  from './products'
import currentProduct  from './currentProduct'
import cart from './cart'
import filters  from './filters'




export default combineReducers({
  products,
  filters,
  currentProduct,
  cart
 })