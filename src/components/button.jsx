import React, { Component } from 'react';
//import React from 'react';

//const Button = () => {

/*	
class Button extends Component {
	render() {
		return (
			<button>boton</button>);

	}
}*/


//class App extends Component {
const Button = props => {
	
	  return (
	    <button
	      className={`Button Button-primary ${props.extraClassName ? props.extraClassName : ''}`}
	      onClick={props.action}
	    >
	      {props.name}
	    </button>
	  );	
}; 


export default Button;
