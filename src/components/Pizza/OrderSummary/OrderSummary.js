import React, { Component } from 'react';

import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

	componentWillUpdate() {
		console.log('[OrderSummary.js] will update');
	}

	render() {
		let ingredientSummary = Object.keys(this.props.ingredients).map(iKey => {
			return (
				<li key={iKey}>
					<span style={{ textTransform: 'capitalize' }}>{iKey}</span>: {this.props.ingredients[iKey]}
				</li>);
		});

		return (
			<Aux>
				<h3>Your order</h3>
				<p>Pizza with the following ingredients:</p>
				<ul>
					{ingredientSummary}
				</ul>
				<p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
				<p>Continue to Chechout?</p>
				<Button clicked={this.props.purchaseCanceled} btnType='Danger'>CANCEL</Button>
				<Button clicked={this.props.purchesedContinued} btnType='Success'>CONTINUE</Button>
			</Aux>
		);
	}
}

export default OrderSummary;