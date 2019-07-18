import React from 'react';
import LogoBq from '../LogoBq';
import NavigationButton from '../NavigationButton';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Landing = () => (
	<Container>
		<Row>
			<Col>
				<div className="landing-Page">
				<LogoBq />
				
				</div>	
			</Col>
			<Col>
			<div className="landing-buttons">
					<Link className="btn btn-outline-secondary btn-lg lnding-btn" to={ROUTES.ORDER}>Mesero</Link>
					<Link className="btn btn-outline-secondary btn-lg lnding-btn" to={ROUTES.KITCHEN}>Cocina</Link>
					<Link className="btn btn-outline-secondary btn-lg lnding-btn" to={ROUTES.ADMIN}>Administrador</Link>
				</div>
			</Col>
		</Row>
	</Container>
);


export default Landing;
