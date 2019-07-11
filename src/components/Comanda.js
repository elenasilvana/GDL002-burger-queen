import React, {Component} from 'react';
import Buttons from './Button';
import Table from 'react-bootstrap/Table';
//import { withFirebase } from './Firebase';

//export const Lacomanda = withFirebase(Comanda);

//aquí debería estar el componente de la comanda 

//const INITIAL_STATE = {
	//clientname: ''
	//};

class Comanda extends Component {
	
	/*
	addName = () => {
		let addname = this.inputName.current.value;
		addname = addname.toString();

		this.setState({clientname: addname}, console.log(this.state.clientname))

	}

	sendOrder = () => {

		let addname = this.inputName.current.value;
		addname = addname.toString();

		this.setState({clientname: addname}, console.log(this.state.clientname))
		//voy a agregar nombre
		this.props.firebase.orders().push({
			clientname: this.state.addname
		});

	}

	*/
	/*onSubmit = event => {
		const { clientname } = this.state;
		console.log('on submit event', clientname);
		//event.preventDefault();
	}*/
	/*
	onChange = event => {
		//console.log(event.target.name, event.target.value);	
		this.setState({ [event.target.name]: event.target.value });
	};*/




	render(){
		const {
			clientname
		} = this.props.clientname;
		//console.log('este es el nombre del cliente', this.state.clientname);

		const isInvalid = clientname === '';

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
			<input
					name="clientname"
					value={clientname}
					onChange={this.props.onChange}
					type="text"
					placeholder="Inserte nombre del cliente"
				/>
				<button disabled={isInvalid} onClick={(e)=>{this.props.onSubmit()}}>
					Send Order
				</button>
			</div>
			)
	}
}

//export default Comanda;
export default Comanda;