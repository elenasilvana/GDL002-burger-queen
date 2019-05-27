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
				<button 
				onClick={this.props.addItem}
				data-price={this.props.price}
				>{this.props.product}</button>
				<h2>${this.props.price}</h2>
				<h3>Index {this.props.key}</h3>
			</div>
			
		);
	}

}

export default ShowMenu;