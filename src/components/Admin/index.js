import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import ShowProducts from '../ShowProducts';

class Admin extends Component{
    constructor() {
		super();
		this.state = {
			menu: [],
		}
	}

    	
	componentDidMount(){
		//const url = "http://localhost:8080/order";
		
        //this works
        fetch("http://localhost:8080/product")
            .then(res => res.json())
						.then((orderAsJson)=>{this.setState({menu : orderAsJson}, console.log(orderAsJson))});		
	}

    render(){
        console.log(this.state.menu);
        return (
            <Container>
                <Row>
                    <Col>
                        {this.state.menu ?  <ShowProducts 
                           menu={this.state.menu}
                        /> : <ShowProducts /> }
                       
                 </Col>
                </Row>
            </Container>

        );
    }
}

export default Admin;