import React from 'react';
import {BreakfastMenu} from '../../data/breakfastmenu';
import NavigationButton from '../NavigationButton';
import Buttons from '../Button';
//import {BreakfastMenu} from '../../data/breakfastmenu';
import ShowMenu from '../ShowMenu';

//buscar card clickeable
const Order = (props) => { 

	let breakfast = BreakfastMenu

	return (
	<container>
		<div className="container">
			{breakfast.map(food => (
			<ShowMenu
			img={food.img} 
			product={food.product} 
			price={food.price} />
				))}
		</div>
		<div>
			<NavigationButton route={'/menu'} name={'Tomar Orden'} />
			<NavigationButton route={'/order'} name={'Entregar Orden'} />
		</div>
	</container>

	)
};

export default Order;