import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';


class Buttons extends Component {

	render() {

	  return (
	    <Button variant="light" size="lg"
	      onClick={this.props.action}
	    >
	      {this.props.name}
	    </Button>
	  );

	}
};

export default Buttons;
