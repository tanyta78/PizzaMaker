import React from 'react';

import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

const orderSummary=(props)=>{
	let ingredientSummary = Object.keys(props.ingredients).map(iKey=>{
		return (
			<li key={iKey}>
				<span style={{textTransform:'capitalize'}}>{iKey}</span>: {props.ingredients[iKey]}
			</li>);
	});
	return(
		<Aux>
			<h3>Your order</h3>
			<p>Pizza with the following ingredients:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
			<p>Continue to Chechout?</p>
			<Button clicked={props.purchaseCanceled} btnType='Danger'>CANCEL</Button>
			<Button clicked={props.purchesedContinued} btnType='Success'>CONTINUE</Button>
		</Aux>
	);
};

export default orderSummary;