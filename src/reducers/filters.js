
const { combineReducers } =require ('redux');



const filtersList=(state=[],action)=>{
	switch(action.type){

		case 'RECEIVE_FILTERS':
			return [
        		...state,
        		...action.filters
     		 ];
      	default:
     		 return state;
   }
};



const visibilityFilters=(state={},action)=>{

    const {type,filterName,filterValue}=action;

    let newList;


	switch(type){
        case 'SET_VISIBILITY_FILTER':
           
        	if(state.hasOwnProperty(filterName)){

        			if(state[filterName].includes(filterValue))
 						
 					newList=state[filterName].filter(value=>value!=filterValue);
					
					else 

					newList=[...state[filterName],filterValue];

        	return {...state,[filterName]: newList};
        	}

        	else{

        		return {...state,[filterName]: [filterValue]};
        	}
		default:
            return state;
    }
};


export default combineReducers({
  filtersList,
  visibilityFilters
});