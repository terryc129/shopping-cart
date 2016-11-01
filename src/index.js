import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route,hashHistory } from 'react-router'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers'
import{products as serverProducts, filters as serverFilter}  from './data/products.json'
import ProductBrowseContainer from './containers/ProductBrowseContainer'
import CartContainer from './containers/CartContainer'
import ProductDetailContainer from './containers/ProductDetailContainer'
import css from './css/app.css'



const store=createStore(reducer);


store.dispatch({
  type: 'RECEIVE_PRODUCTS',
  products: serverProducts
});

store.dispatch({
  type: 'RECEIVE_FILTERS',
  filters: serverFilter
});


ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
      <Route path="/"  component={ProductBrowseContainer}/>
    	<Route path="/pdp" component={ProductDetailContainer}/>
    	<Route path="/cart" component={CartContainer}/>
  </Router>
  </Provider>
  ,
 document.getElementById('root')
);
