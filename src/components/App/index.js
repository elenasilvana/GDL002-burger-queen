import React from 'react';
//import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from "react-router-dom";


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
	<Switch>
		<Route exact path={ROUTES.LANDING} component={LandingPage} />
		<Route exact path={ROUTES.SELECTUSER} component={SelectUserPage} />
		<Route exact path={ROUTES.ORDER} component={OrderPage} />
		<Route exact path={ROUTES.MENU} component={MenuPage} />
	</Switch>
	</Router>
	);

export default App; 
