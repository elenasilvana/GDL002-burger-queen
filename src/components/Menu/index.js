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

	constructor() {
		super();
		this.state = {
			breakfast: null,
			normal: null,
			order: []
		}
		this.addItem = this.addItem.bind(this)
	}

	addItem(e) {
		console.log(e.target.innerHTML, e.target.dataset.price)

		const nOrder = {
				product: e.target.innerHTML,
				price: e.target.dataset.price

			}
		this.setState({
				order: [...this.state.order, nOrder]
		}, ()=> console.log(this.state));

	}
		render() {
		console.log(this.state.order);

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
						{this.state.order ? <Comanda order={this.state.order}/> : <Comanda /> }
						
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
						{this.state.order ? <Comanda order={this.state.order}/> : <Comanda /> }
				  </div>
				  </Tab>
				</Tabs>	
			</container>
		)
	}
};

export default Menu;
