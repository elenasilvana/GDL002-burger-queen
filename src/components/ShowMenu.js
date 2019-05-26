import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

//import Buttons from './Button';

class ShowMenu extends Component {
	//le paso la función por ejemplo: 
	// this.props.nombredelafunción(this.props.argumento)
	//product, price, key


//<Buttons action={()=>this.props.addItem(this.props.product, this.props.price, this.props.key)} name={this.props.product} />
// componente boton <Buttons action={()=>this.props.addItem(this.props.product, this.props.price)} name={this.props.product} />
	render(){
		console.log(this.props);

		return (
			<div className="cardFood-container">
				<a>
					<div className="food-image" style={{backgroundImage: "url(" + this.props.img + ")"}}></div>
				</a>
				<Button variant="outline-secondary" size="lg" 
				onClick={()=>this.props.action(this.props.product, this.props.price).bind(this)}
				//onClick={()=>console.log(this.props.product, this.props.price)}
				>
				{this.props.product}
				</Button>
				
				<h2>${this.props.price}</h2>
			</div>
			
		);
	}
}

export default ShowMenu;