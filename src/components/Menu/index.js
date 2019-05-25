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
*/

	//console.log(this.state.breakfast);
	//BreakfastMenu;

				//<NavMenu breakfast={this.state.breakfast} normal={this.state.normal}  />
	render() {


		return (
			<container>
				<Tabs defaultActiveKey="normalMenu" id="uncontrolled-tab-example">
				  <Tab eventKey="breakfastMenu" title="barrafija">
				  	<div className="container">
						 {BreakfastMenu.map(food => (
						<ShowMenu
						img={food.img} 
						product={food.product} 
						price={food.price} />
							)) } 
					</div>
				  </Tab>
				  <Tab eventKey="normalMenu" title="barrafija2">
				    <div className="container">

						{NormalMenu.map(food => (
						<ShowMenu
						img={food.img} 
						product={food.product} 
						price={food.price} />
							))}
					</div>
				  </Tab>
				</Tabs>	
			</container>
		)
	}
};

export default Menu;
