import React from 'react';
import {NormalMenu} from '../../data/normalmenu';


const Menu = (props) => { 

	let normal = NormalMenu.map((product) => {

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
			{normal}
		</div>

	)
};
export default Menu;