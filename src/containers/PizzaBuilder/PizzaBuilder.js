import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Pizza from '../../components/Pizza/Pizza';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.8,
	meat: 1.5,
	bacon: 0.6
};

class PizzaBuilder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ingredients: {
				salad: 0,
				bacon: 0,
				cheese: 0,
				meat: 0
			},
			totalPrice: 3,
			purchasable: false,
			purchasing: false
		};
	}

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map(iKey => {
				return ingredients[iKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		this.setState({ purchasable: sum > 0 });
	}

	addIngredientHandler = (type) => {
		const updatedCount = this.state.ingredients[type] + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
		this.updatePurchaseState(updatedIngredients);
	}

	removeIngredientHandler = (type) => {
		const updatedCount = this.state.ingredients[type] - 1;
		if (updatedCount < 0) {
			return;
		}
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
		this.updatePurchaseState(updatedIngredients);

	}

	purchaseHandler = () => {
		this.setState({purchasing:true});
	}

	purchaseCancelHandler = () => {
		this.setState({purchasing:false});
	}

	purchaseContinueHandler = () => {
		alert('You continue!');
	}

	render() {
		const disabledInfo = {
			...this.state.ingredients
		};
		for (const key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		return (
			<Aux>
				<Modal show={this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
					<OrderSummary 
						price={this.state.totalPrice}
						ingredients={this.state.ingredients}
						purchaseCanceled={this.purchaseCancelHandler}
						purchesedContinued={this.purchaseContinueHandler}/>
				</Modal>
				<Pizza ingredients={this.state.ingredients} />
				<BuildControls
					price={this.state.totalPrice}
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					purchasable={this.state.purchasable}
					disabled={disabledInfo}
					ordered={this.purchaseHandler} />
			</Aux>
		);
	}
}

export default PizzaBuilder;