import React from 'react';
import LogoBq from '../LogoBq';
import NavigationButton from '../NavigationButton';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';



const Landing = () => (

	<div>
		<div>
			<LogoBq />
		</div>
		<div>
			<NavigationButton route={'/#order'} name={'Mesero'} />
			<Link to={ROUTES.ORDER}>Mesero</Link>
			<NavigationButton route={'/#'} name={'Cocina'} />
			<Link to={ROUTES.LANDING}>Cocina</Link>
			<NavigationButton route={'/#'} name={'Administrador'} />
			<Link to={ROUTES.LANDING}>Administrador</Link>

		</div>

	</div>
);
export default Landing;

 /* 

			<Button name="Mesero" action={()=>console.log('holi')}   />
			<Button name="Cocina" action={()=>console.log('holi')} />
			<Button name="Administrador" action={()=>console.log('holi')} /> 
			*/