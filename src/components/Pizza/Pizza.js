import React from 'react';

import classes from './Pizza.css';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';

const pizza = (props)=>{
	let transformedIngredients = Object.keys(props.ingredients)
		.map(iKey=>{
			return [...Array(props.ingredients[iKey])].map((_,index)=>{
				return 	<PizzaIngredient key={iKey+index} type={iKey}/>;
			});
		})
		.reduce((arr,el)=>{
			return arr.concat(el);
		},[]);
	if(transformedIngredients.length === 0){
		transformedIngredients = <p>Please start adding ingredients!</p>;
	}
	return (
		<div className={classes.Pizza}>
			<PizzaIngredient type='bread-top'/>
			{transformedIngredients}
			<PizzaIngredient type='bread-bottom'/>
		</div>
	);
};

export default pizza;