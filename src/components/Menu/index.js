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
		this.addItem = this.addItem.bind(this);
		this.delete = this.delete.bind(this);
	}

	//update order state to send to the comanda component
	addItem(e) {

		console.log(e.target.innerHTML, e.target.dataset.price);
		const cost = parseInt(e.target.dataset.price);

		//generates a new object when button is clicked
		this.arrOrden.push({

				product: e.target.innerHTML,
				price: cost,
				//total: result

			});
		//update this.state.order with the values
		this.setState({
				order: this.arrOrden,
				total: this.state.total + cost
		}, () => console.log(this.state));


	}

	delete(e){
		//product, i
		e.preventDefault(e)
		console.log('target!!', e.target.innerHTML)
	//debugger;
		//this.state.order.forEach((order)=> {
			//if(order.product == product){
				//this.state.order.splice(i);
			//}
			//this.setState({
				//state: this.state
			//})
		//})
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
						{this.state.order ? <Comanda order={this.state.order} total={this.state.total} delete={this.delete}/> : <Comanda /> }
						
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
						{this.state.order ? <Comanda order={this.state.order} total={this.state.total}/> : <Comanda /> }
				  </div>
				  </Tab>
				</Tabs>	
			</container>
		)
	}
};

export default Menu;
