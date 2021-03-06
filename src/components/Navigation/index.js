import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
//import '../../css/style.css';


const Navigation = () => (
	<div className="App">
		<nav>
			<ul>
				<li>
					<Link to={ROUTES.SELECTUSER}>SelectUser</Link>
				</li>
				<li>
					<Link to={ROUTES.LANDING}>Landing</Link>
				</li>
				<li>
					<Link to={ROUTES.ORDER}>Order</Link>
				</li>
				<li>
					<Link to={ROUTES.MENU}>Menu</Link>
				</li>
				<li>
					<Link to={ROUTES.KITCHEN}>Kitchen</Link>
				</li>
				<li>
					<Link to={ROUTES.ADMIN}>Admin</Link>
				</li>
				<li>
					<Link to={ROUTES.DELIVER}>Deliver</Link>
				</li>
			</ul>
		</nav>
	</div>
);

export default Navigation;


