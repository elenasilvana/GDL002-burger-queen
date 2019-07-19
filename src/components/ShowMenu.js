import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class ShowMenu extends Component {

render(){

		return (
			<div className="cardFood-container">
				<a>
					<div className="food-image" style={{backgroundImage: "url(" + this.props.img + ")"}}></div>
				</a>
				<Button variant="secondary" size="lg"
				onClick={ () => { console.log('click', this.props);this.props.addItem(this.props.price, this.props.product) } }
				data-price={this.props.price}
				>{this.props.product}</Button>
				<h2>${this.props.price}</h2>
			</div>
			
		);
	}

}

export default ShowMenu;