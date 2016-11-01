export const setVisibilityFilter=(name,value)=>( {
							   		type:'SET_VISIBILITY_FILTER',
							   		filterName: name,
							   		filterValue: value
									})


export const addToCart=(id)=>({
								type:'ADD_TO_CART',
								id,
						})


export const goToDetail=(id)=>({
								type:'GO_TO_PRODUCT_DETAIL',
								id,
						})
						