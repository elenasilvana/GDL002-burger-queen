import React, {Component} from 'react';
import Buttons from './Button';
import Table from 'react-bootstrap/Table';


class Comanda extends Component {


	render(){
		const {
			clientname
		} = this.props.clientname;

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
							<td><input 
							type="button" 
							value="Eliminar" 
							onClick={() => {this.props.onDelete(line.price, line.product)}}/>
							</td>
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
					ref="client_name"
				/>
				<button disabled={isInvalid} onClick={(e)=>{this.props.onSubmit()}}>
					Send Order
				</button>
			</div>
			)
	}
}

export default Comanda;