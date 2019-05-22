import React from 'react';
import {BreakfastMenu} from '../../data/breakfastmenu';
import NavigationButton from '../NavigationButton';

//buscar card clickeable
const Order = (props) => { 

	let breakfast = BreakfastMenu.map((product) => {

	return (
		<div className="cardFood-container">
			<a>
				<div className="food-image" style={{backgroundImage: "url(" + product.img + ")"}}></div>
			</a>
			<button>{product.product}</button>
			<h2>${product.price}</h2>
		</div>
		) 
	});

	return (
	<container>
		<div className="container">
			{breakfast}
		</div>
		<div>
			<NavigationButton route={'/menu'} name={'Tomar Orden'} />
			<NavigationButton route={'/order'} name={'Entregar Orden'} />
		</div>
	</container>

	)
};

export default Order;