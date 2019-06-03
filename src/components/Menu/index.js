//import React from 'react';
import React, {Component} from 'react';
//data
import {NormalMenu} from '../../data/normalmenu';
import {BreakfastMenu} from '../../data/breakfastmenu';
//bootstrap style imports
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
//components
import ShowMenu from '../ShowMenu';
//import NavMenu from '../NavMenu';
import Comanda from '../Comanda';
//import ClientName from '../ClientName';

import firebase from '../Firebase/firebase';


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
			clientname: null,
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
						{this.state.order ? <Comanda order={this.state.order} total={this.state.total} onDelete={this.delete}/> : <Comanda /> }
						
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
						{this.state.order ? <Comanda order={this.state.order} total={this.state.total} onDelete={this.delete}/> : <Comanda /> }
				  </div>
				  </Tab>
				</Tabs>	
			</container>
		)
	}
};

export default Menu;
