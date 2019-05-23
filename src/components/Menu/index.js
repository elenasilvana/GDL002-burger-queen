import React from 'react';
import {NormalMenu} from '../../data/normalmenu';
import Nav from 'react-bootstrap/Nav';
import NavMenu from '../NavMenu';
import ShowMenu from '../ShowMenu';


const Menu = (props) => { 

	let normal = NormalMenu;

	return (

	<container>
		
		<NavMenu />
		<div className="container">
			{normal.map(food => (
			<ShowMenu
			img={food.img} 
			product={food.product} 
			price={food.price} />
				))}
		</div>
	</container>

	)
};

export default Menu;