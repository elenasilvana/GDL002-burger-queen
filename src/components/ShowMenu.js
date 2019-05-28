import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
//import Buttons from './Button';

class ShowMenu extends Component {

render(){
		//console.log('aqui los props', this.props);

		return (
			<div className="cardFood-container">
				<a>
					<div className="food-image" style={{backgroundImage: "url(" + this.props.img + ")"}}></div>
				</a>
				<Button variant="secondary" size="lg"
				onClick={this.props.addItem}
				data-price={this.props.price}
				>{this.props.product}</Button>
				<h2>${this.props.price}</h2>
			</div>
			
		);
	}

}

export default ShowMenu;