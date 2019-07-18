import React from 'react';

import NavigationButton from '../NavigationButton';

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Order = (props) => {

	return (
		<Container>
			<Row>
				<Col>
					<div className="order-page-content">
						<div className="buttons-order">
							<Link className="btn btn-outline-secondary btn-lg" to={ROUTES.MENU}> Tomar Orden </Link>
							<button disabled={true} className="btn btn-outline-secondary btn-lg"> Entregar Orden </button>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	)
};

export default Order;