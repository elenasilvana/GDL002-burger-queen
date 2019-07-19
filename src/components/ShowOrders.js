import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

class ShowOrders extends Component {
    constructor() {
        super();
        this.state = {
           
        }
    }

    render() {

        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Orden #{this.props.id}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.name}</Card.Subtitle>
                    <ListGroup>
                        {this.props.items.map((item, index)=>(          
                            <ListGroup.Item variant="light">{item.product}</ListGroup.Item>
                            ))
                        }
                        <ListGroup.Item variant="dark">{this.props.status}</ListGroup.Item>
                    </ListGroup>
                    <Button 
                    variant="primary" 
                    id={this.props.id}
                    value={this.props.status}
                    onClick={(e)=>{this.props.onChangeStatus(this.props.id, this.props.status)}}>
                        Change Status
                        </Button>
                </Card.Body>
            </Card>

        )
    }
}


export default ShowOrders;

