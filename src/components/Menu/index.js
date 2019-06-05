//import React from 'react';
import React, {Component} from 'react';
//data
import {NormalMenu} from '../../data/normalmenu';
import {BreakfastMenu} from '../../data/breakfastmenu';
//bootstrap style imports
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
//comanda
import Buttons from '../Button';
import Table from 'react-bootstrap/Table';
//components
import ShowMenu from '../ShowMenu';
//import NavMenu from '../NavMenu';
//import Comanda from '../Comanda';
//import Lacomanda from '../Comanda';
//import ClientName from '../ClientName';

//import firebase from '../Firebase/firebase';
import { withFirebase } from '../Firebase';


class Menu extends Component {
	arrOrden = []; 

	constructor() {
		super();
		this.state = {
			breakfast: null,
			normal: null,
			//to save the order
			order: this.arrOrden,
			//to save the client name
			//clientname: null,
			total: 0,
		}
	}

	//update order state to send to the comanda component
	addItem = (price, product) => {
		const newOrderElement = {
			product,
			price,
		}
		this.setState({
			order: [...this.state.order, newOrderElement],
			total: this.state.total + price,
		})
	}

	delete = (price, product) => {
		this.setState({
			order: this.state.order.filter( (orderElement) => { return orderElement.product !== product }),
			total: this.state.total - price,
		})
	}


	

	

		render() {
		//console.log(this.state.total);

		return (
			<container>
				<Tabs defaultActiveKey="normalMenu" id="uncontrolled-tab-example">
				  <Tab eventKey="breakfastMenu" title="Desayuno">
				  <div className= "row">
					  	<div className="card-container col-md-6">
							 {BreakfastMenu.map((food, index) => (
							<ShowMenu
								key={index}
								img={food.img} 
								product={food.product} 
								price={food.price} 
								addItem={this.addItem}
							/>
							)) } 
							
						</div>
						{this.state.order ? <Lacomanda order={this.state.order} total={this.state.total} onDelete={this.delete}/> : <Lacomanda /> }
						
				  </div>

				  </Tab>
				  <Tab eventKey="normalMenu" title="Normal">
				   <div className= "row">
					  	<div className="card-container col-md-6">
							 {NormalMenu.map((food, index) => (
								<ShowMenu
									key={index}
									img={food.img} 
									product={food.product} 
									price={food.price}
									addItem={this.addItem} 
								/>
							)) } 
						</div>
						{this.state.order ? <Lacomanda order={this.state.order} total={this.state.total} onDelete={this.delete}/> : <Lacomanda /> }
				  </div>
				  </Tab>
				</Tabs>	
			</container>
		)
	}
};


class Comanda extends Component {
	constructor(){
		super();
		this.state={
			clientname: "",
		}

	this.inputName = React.createRef();
	}

	/*
	onChangeText = event => {
		this.setState({ clientname: event.target.value });
	};

	onCreateMessage = event => {
		this.props.firebase.orders().push({
		clientname: this.state.clientname,
	});

	this.setState({ clientname: '' });
	event.preventDefault();
	};*/

	/*
	addName = () => {
		let addname = this.inputName.current.value;
		addname = addname.toString();

		this.setState({clientname: addname}, console.log(this.state.clientname))

	}*/

	sendOrder = (e) => {
		console.log(e);
		console.log(this.props.order);

		let addname = this.inputName.current.value;
		addname = addname.toString();

		this.setState({clientname: addname}) //console.log(this.state.clientname))

		if(this.state.clientname){
			this.props.firebase.orders().push({
				clientname: this.state.clientname,
				products: this.props.order


			});
		}
		//voy a agregar nombre

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
			  { this.props.order.map((line, index) => (
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
				<Buttons action={(e)=>{this.sendOrder(e)}} name={'Enviar Orden'} />
			</div>
			)
	}
}


export const Lacomanda = withFirebase(Comanda);

export default Menu;
