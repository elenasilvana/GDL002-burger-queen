import React from 'react';

import NavigationButton from '../NavigationButton';
import Buttons from '../Button';
//import {BreakfastMenu} from '../../data/breakfastmenu';
import ShowMenu from '../ShowMenu';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Order = (props) => { 

	return (
	<container>
		<div>
			
			<Link className="btn btn-outline-secondary btn-lg" to={ROUTES.MENU}> Tomar Orden </Link>
			
		</div>
	</container>

	)
};

export default Order;