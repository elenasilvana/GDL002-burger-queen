import React from 'react';
import Button from 'react-bootstrap/Button';


const NavigationButton = (props) => {

	return(
		<Button variant="outline-secondary" size="lg" href={props.route}>{props.name}</Button>

		);
}

export default NavigationButton;