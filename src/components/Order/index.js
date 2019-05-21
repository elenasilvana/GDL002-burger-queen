import React from 'react';
import {BreakfastMenu} from '../../data/breakfastmenu';


const Order = (props) => { 

	let breackfast = BreakfastMenu.map((product) => {

	return (
		<div className="cardFood-container">
			<a>
				<div className="food-image" style={{backgroundImage: "url(" + product.img + ")"}}></div>
			</a>
			<h3> {product.product}</h3>
			<h2>${product.price}</h2>
		</div>
		) 
	});

	return (
		<div className="container">
			{breackfast}
		</div>

	)
};

export default Order;