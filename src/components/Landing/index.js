import React from 'react';
import LogoBq from '../LogoBq';
import NavigationButton from '../NavigationButton';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Button from 'react-bootstrap/Button';
import SignUpForm from '../SignUpForm';
import API from '../API';




const Landing = () => (

	<div>
		<div>
			<LogoBq />
		</div>
		<div>
			<Link className="btn btn-outline-secondary btn-lg" to={ROUTES.ORDER}>Mesero</Link>
			<Link className="btn btn-outline-secondary btn-lg" to={ROUTES.LANDING}>Cocina</Link>
			<Link className="btn btn-outline-secondary btn-lg" to={ROUTES.LANDING}>Administrador</Link>

		</div>
		<SignUpForm />

	</div>
);
/*
class SignUpForm extends Component {
	constructor(props) {
		super(props);
	}
	onSubmit = event => {
	}
	onChange = event => {
	};
	render() {
		return (
			<form onSubmit={this.onSubmit}>
			</form>
		);
	}
}*/

export default Landing;

/*

		   <Button name="Mesero" action={()=>console.log('holi')}   />
		   <Button name="Cocina" action={()=>console.log('holi')} />
		   <Button name="Administrador" action={()=>console.log('holi')} />
		   */