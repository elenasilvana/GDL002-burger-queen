import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';


import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SelectUserPage from '../SelectUser';
import OrderPage from '../Order';
import MenuPage from '../Menu';

import * as ROUTES from '../../constants/routes';

const App = () => (
	<Router>
		<Navigation />

		<hr />
		<Route exact path={ROUTES.LANDING} component={LandingPage} />
		<Route path={ROUTES.SELECTUSER} component={SelectUserPage} />
		<Route path={ROUTES.ORDER} component={OrderPage} />
		<Route path={ROUTES.MENU} component={MenuPage} />

	</Router>
	);

export default App; 
