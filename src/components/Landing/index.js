import React from 'react';
import LogoBq from '../LogoBq';
import NavigationButton from '../NavigationButton';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Button from 'react-bootstrap/Button';
import SignUpForm from '../SignUpForm';




const Landing = () => (

	<div>
		<div>
			<LogoBq />
		</div>
		<div>
			<Link className="btn btn-outline-secondary btn-lg" to={ROUTES.ORDER}>Mesero</Link>
			<Link className="btn btn-outline-secondary btn-lg" to={ROUTES.KITCHEN}>Cocina</Link>
			<Link className="btn btn-outline-secondary btn-lg" to={ROUTES.ADMIN}>Administrador</Link>

		</div>

	</div>
);


export default Landing;
