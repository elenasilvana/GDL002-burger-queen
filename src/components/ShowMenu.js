import React, {Component} from 'react';
import Buttons from './Button';

class CardMenu extends Component {


	render(){

		return (

			<div className="cardFood-container">
				<a>
					<div className="food-image" style={{backgroundImage: "url(" + this.props.img + ")"}}></div>
				</a>
				<Buttons action={()=>console.log('aqui el botón')} name={this.props.product} />
				<h2>${this.props.price}</h2>
			</div>
			
		);
	}
}

export default CardMenu;