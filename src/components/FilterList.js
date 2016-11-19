import React from 'react'
import Filter from './Filter'

const getActiveList=(name,activeFilters)=>{
  

   if(Object.keys(activeFilters).includes(name))

   	return activeFilters[name];


 };

const FilterList=({filters,activeFilters,onFilterTick})=>{
 
 
  return (
		<ul className='filterList'>
		{
			filters.map(filter=>
				 <Filter  key={filter.name} onFilterTick={onFilterTick}
			     activeFilterList={getActiveList(filter.name,activeFilters)}  {...filter}  
			     />
			
			)

		}
		</ul>
	);
};



export default FilterList