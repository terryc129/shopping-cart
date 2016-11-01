import React from 'react'
import {setVisibilityFilter} from '../actions'

const Filter=({name,values,activeFilterList=[],dispatch})=>{

	return (
		<div>
		<h2>{name}</h2>
		<ul className='filter'>
			{
				values.map(value=>
					<li key={value}>
						<input type="checkbox" onClick={()=>{dispatch(setVisibilityFilter(name,value))}}
							   defaultChecked={activeFilterList.includes(value)}
						/>
						{value}
					</li>
				)
			}
		</ul>
		</div>

	);

};

export default Filter

