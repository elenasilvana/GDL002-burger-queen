import React, {Component} from 'react';
import Buttons from './Button';
import Table from 'react-bootstrap/Table'

//aquí debería estar el componente de la comanda 

class Comanda extends Component {
	render(){
		return(
			<div className="comanda-container col-md-6">
			<Table responsive striped bordered hover>
			  <thead>
			    <tr>
			      <th>#</th>
			      <th>Comida</th>
			      <th>Precio</th>
			      <th>boton</th>
			    </tr>
			  </thead>
			  <tbody>
			  { 
			  	this.props.order.map((line, index) => (
				    <tr>
				      <td>no. index</td>
				      <td>{line.product}</td>
				      <td>${line.price}</td>
				      <td>boton de borrar</td>
				    </tr>

			  	))}

			  </tbody>
			</Table>
				<Buttons action={()=>{console.log('boton de la orden')}} name={'Enviar Orden'} />
			</div>
			)
	}
}

export default Comanda;