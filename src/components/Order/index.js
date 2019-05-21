import React from 'react';
import {BreakfastMenu} from '../../data/breakfastmenu';

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
		<div className="container">
			{breakfast}
		</div>

	)
};

export default Order;