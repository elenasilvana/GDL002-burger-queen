import React, { Component } from 'react';
//import React from 'react';
//import Button from './components/button';
//import LogoBG from './components/logoBG';

//home page

const showCocina = () => {
	console.log('pantalla cocina');
}

const showMesero = () => {
	console.log('pantalla mesero');
}

const showAdmin = () => {
	console.log('pantalla admin');
}

class Home extends Component {

	//probando con class
	render(){
		return (
				<div>
				<h1>Este es home</h1>		
				</div>
			);

	}
}
/*
function Home() {
	//puedo llamar componentes cuando el 'componente es declarado como función? '
		return (
			<div>
			<h1>Este es home</h1>		
			</div>
		);
}
*/
export default Home;

//debería haber dos botones:  tomar orden, entregar orden
//también debería aparecer el mesero seleccionado. 
