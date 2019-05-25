import React, {Component} from 'react';
import Buttons from './Button';

//aquí debería estar el componente de la comanda 

class Comanda extends Component {
	render(){
		return(
			<div className="comanda-container col-md-6">
				<h1>aqui aparecerá la comanda</h1>
				<Buttons action={()=>{console.log('boton de la orden')}} name={'Enviar Orden'} />
			</div>
			)
	}
}

export default Comanda;