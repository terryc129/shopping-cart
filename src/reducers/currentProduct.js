const currentProduct=(state={},action)=>{
	switch(action.type){

		case 'GO_TO_PRODUCT_DETAIL':
			return {
				id: action.id
			}
      	default:
     		 return state;
   }


};


export default currentProduct