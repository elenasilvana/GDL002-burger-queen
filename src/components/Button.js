import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';


class Buttons extends Component {

	render() {

	  return (
	    <button variant="light" size="lg"
	      onClick={this.props.action}
	    >
	      {this.props.name}
	    </button>
	  );

	}
};

export default Buttons;
