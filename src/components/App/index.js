import React from 'react';
//import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { HashRouter, Route, Switch } from "react-router-dom";


import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SelectUserPage from '../SelectUser';
import OrderPage from '../Order';
import MenuPage from '../Menu';
import AdminPage from '../Admin';
import KitchenPage from '../Kitchen';

//import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constants/routes';

const App = () => (
	<HashRouter basename="GDL002-burger-queen/">	
		<Navigation />

	<Switch>
		<Route exact path={ROUTES.LANDING} component={LandingPage} />
		<Route path={ROUTES.SELECTUSER} component={SelectUserPage} />
		<Route path={ROUTES.ORDER} component={OrderPage} />
		<Route path={ROUTES.MENU} component={MenuPage} />
		<Route path={ROUTES.KITCHEN} component={KitchenPage} />
		<Route path={ROUTES.ADMIN} component={AdminPage} />
	</Switch>
	</HashRouter>

	);

export default App; 
