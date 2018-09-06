import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Pizza from '../../components/Pizza/Pizza';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';

class PizzaBuilder extends Component {
	constructor(props){
		super(props);
		this.state={
			ingredients:{
				salad:0,
				bacon:0,
				cheese:0,
				meat:0
			}
		};
	}
	render() {
		return (
			<Aux>
				<Pizza ingredients={this.state.ingredients}/>
				<BuildControls/>
			</Aux>
		);
	}
}

export default PizzaBuilder;