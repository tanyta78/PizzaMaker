import React from 'react';

import pizzaLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css'; 

const logo = (props) => (
	<div className={classes.Logo} style={{height: props.height}}>
		<img src={pizzaLogo} alt="logo"/>
	</div>
);

export default logo;