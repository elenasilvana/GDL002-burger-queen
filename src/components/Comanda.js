import React, {Component} from 'react';
import Buttons from './Button';

//aquí debería estar el componente de la comanda 

export class Comanda extends Component {
	render(){
		return(
			<h1>{this.props.meal}</h1>
			<Button action={()=>{console.log('boton de la orden')}} name={'Enviar Orden'} />
			)
	}
}