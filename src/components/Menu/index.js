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
import NavMenu from '../NavMenu';
import Comanda from '../Comanda';


//const Menu = (props) => { 
class Menu extends Component {
	constructor(props){
		super(props);
		this.state={
			breakfast: null,
			normal: null,
		}
	} 

	//let normal = NormalMenu;


	/*
this.setState()
this.state.breakfast=BreakfastMenu;
this.state.normal = NormalMenu;
<Row>
    <Col xs={6}>aqui van las cards</Col>
    <Col xs={6}>aqui va la comanda</Col>
  </Row>

*/

	//console.log(this.state.breakfast);
	//BreakfastMenu;

				//<NavMenu breakfast={this.state.breakfast} normal={this.state.normal}  />
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
							price={food.price} />
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
