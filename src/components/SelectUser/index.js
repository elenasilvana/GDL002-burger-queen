import React from 'react';
import Tab from 'react-bootstrap/Tab';
//import NavMenu from '../NavMenu';
import LogoBq from '../LogoBq';
import NavMenu from '../NavMenu';
import NavigationButton from '../NavigationButton';

//probando firebaseContext
import { FirebaseContext } from '../Firebase';



	//<LogoBq />

const SelectUser = () => (

	<FirebaseContext.Consumer>
		{firebase => {
			return <div> estoy en firebase y rendereo algo </div>
		}}
	</FirebaseContext.Consumer>

);

export default SelectUser;