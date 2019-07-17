import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

class ShowOrders extends Component {

    render() {
        //console.log(this.props.name)
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Orden #23</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.name}</Card.Subtitle>
                    <ListGroup>
                        {this.props.items.map((item, index)=>(          
                            <ListGroup.Item variant="light">{index}{item.product}</ListGroup.Item>
                            ))
                        }
                        <ListGroup.Item variant="dark">{this.props.status}</ListGroup.Item>
                    </ListGroup>
                    <Button variant="primary">Change Status</Button>
                </Card.Body>
            </Card>

        )
    }
}


export default ShowOrders;

