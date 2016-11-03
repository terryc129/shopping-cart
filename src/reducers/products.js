import { combineReducers } from 'redux'



const products=(state=[],action)=>{
	switch(action.type){

		case 'RECEIVE_PRODUCTS':
			return [
        		...state,
        		...action.products.map((obj,index)=>({...obj,id:index}))
     		 ]
      	default:
     		 return state;
   }
};



const filterBrand =(brand,bfilter=[])=>{

	if(bfilter.length==0) return true;
	
	else return bfilter.includes(brand);


};


const filterPrice=(price,pfilter=[])=>{

	if(pfilter.length==0) return true;
	
	else 

    return pfilter.map(p=>p[0]).includes(price[0]);

};





export default products

export const getVisibleProducts=(products,filter)=>{

	return products.filter(p=>filterBrand(p.brand,filter.brand))
	.filter(p=>filterPrice(p.price,filter.price))

};

