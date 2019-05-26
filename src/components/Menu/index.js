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

		state={
			breakfast: null,
			normal: null,
			order: []
		}

addItem = (product, price) => {
	const newOrder = {
		product: product,
		price: price,
	}
	this.setState({
		order: [...this.state.order, newOrder]
	})
};

	render() {


		return (
			<container>
				<Tabs defaultActiveKey="normalMenu" id="uncontrolled-tab-example">
				  <Tab eventKey="breakfastMenu" title="Desayuno">
				  <div className= "row">
					  	<div className="card-container col-md-6">
							 {BreakfastMenu.map(food => (
							<ShowMenu
							img={food.img} 
							product={food.product} 
							price={food.price} 
							action={this.addItem}
							/>
								)) } 
						</div>
						<Comanda />
				  </div>

				  </Tab>
				  <Tab eventKey="normalMenu" title="Normal">
				   <div className= "row">
					  	<div className="card-container col-md-6">
							 {NormalMenu.map(food => (
							<ShowMenu
							key={food.id}
							img={food.img} 
							product={food.product} 
							price={food.price} />
								)) } 
						</div>
						<Comanda />
				  </div>
				  </Tab>
				</Tabs>	
			</container>
		)
	}
};

export default Menu;
