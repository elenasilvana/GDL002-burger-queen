import React, {Component} from 'react';
import Buttons from './Button';
import Table from 'react-bootstrap/Table';
import { withFirebase } from './Firebase';

export const Lacomanda = withFirebase(Comanda);

//aquí debería estar el componente de la comanda 

class Comanda extends Component {
	constructor(){
		super();
		this.state={
			clientname: "",
		}

	this.inputName = React.createRef();
	}

	/*
	addName = () => {
		let addname = this.inputName.current.value;
		addname = addname.toString();

		this.setState({clientname: addname}, console.log(this.state.clientname))

	}*/

	sendOrder = () => {

		let addname = this.inputName.current.value;
		addname = addname.toString();

		this.setState({clientname: addname}, console.log(this.state.clientname))
		//voy a agregar nombre
		this.props.firebase.orders().push({
			clientname: this.state.addname
		});

	}



	render(){
		return(
			<div className="comanda-container col-md-6">
			<Table responsive striped bordered hover>
			  <thead>
			    <tr>
			      <th>Comida</th>
			      <th>Precio</th>
			      <th>boton</th>
			    </tr>
			  </thead>
			  <tbody>
			  { 
			  	this.props.order.map((line, index) => (
				    <tr>
				      <td>{line.product}</td>
				      <td>${line.price}</td>
				      <td><input type="button" value="Eliminar" onClick={() => {this.props.onDelete(line.price, line.product)}}/></td>
				    </tr>

			  	))}
			  	<tr>
			  		<td>Total</td>
			  		<td>${this.props.total}</td>
			  	</tr>

			  </tbody>
			</Table>
				<textarea className="clientName" ref={this.inputName}>
			  		introduce nombre del cliente
				</textarea>
				<Buttons action={()=>{this.sendOrder()}} name={'Enviar Orden'} />
			</div>
			)
	}
}

//export default Comanda;
export default Lacomanda;