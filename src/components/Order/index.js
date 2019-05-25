import React from 'react';

import NavigationButton from '../NavigationButton';
import Buttons from '../Button';
//import {BreakfastMenu} from '../../data/breakfastmenu';
import ShowMenu from '../ShowMenu';

const Order = (props) => { 

	return (
	<container>
		<div>
			<NavigationButton route={'/menu'} name={'Tomar Orden'} />
			<NavigationButton route={'/order'} name={'Entregar Orden'} />
		</div>
	</container>

	)
};

export default Order;