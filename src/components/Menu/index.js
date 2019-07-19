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
import Comanda from '../Comanda';
import NavBar from '../NavBar';

class Menu extends Component { 

	constructor() {
		super();
		this.state = {
			breakfast: null,
			normal: null,
			//to save the order
			order: [],
			arrTry: [],
			//to save the client name
			clientname: '',
			total: 0
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
	//comanda order
	onSubmit = event => {
		const { clientname } = this.state;
		const url = "http://localhost:8080/order";
		//console.log('on submit event', clientname);

		const sendOrder = {
			"clientname": this.state.clientname,
			"status": "pending",
			"items": this.state.order
		};

		//if(this.state.sendorder) {
			this.fetchPost(url, sendOrder);
			console.log(sendOrder);
	//	}

	}
		
		//document.getElementById('client-name').reset();
		//event.preventDefault();
	

	onChange = event => {
		console.log(event.target.name, event.target.value);	
		this.setState({ [event.target.name]: event.target.value });
	}

	fetchPost = (url, data) => {
		fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers:{
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
		.then(response => console.log('aquí la respuesta', JSON.stringify(response)))
		.catch(error => console.log('Error ', error)); 
	}


	
	componentDidMount(fetchPost, data){
		//const url = "http://localhost:8080/order";
		
        //this works
        fetch("http://localhost:8080/order")
            .then(res => res.json())
						.then((orderAsJson)=>{this.setState({arrTry : orderAsJson}, console.log(orderAsJson))});		
	}
	

		render() {
			console.log(this.state.sendorder)

		return (
			<container>
				<div className="row">
					<div className="col">
						<NavBar />
					</div>
				</div>
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
						{this.state.order ? <Comanda 
							order={this.state.order} 
							total={this.state.total}
							clientname={this.state.clientname} 
							onDelete={this.delete}
							onSubmit={this.onSubmit}
							onChange={this.onChange}
						/> : <Comanda /> }
						
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
						{this.state.order ? <Comanda 
						order={this.state.order} 
						total={this.state.total} 
						clientname={this.state.clientname}
						onDelete={this.delete}
						onSubmit={this.onSubmit}
						onChange={this.onChange}
						/> : <Comanda />}
				  </div>
				  </Tab>
				</Tabs>	
			</container>
		)
	}
};


export default Menu;
