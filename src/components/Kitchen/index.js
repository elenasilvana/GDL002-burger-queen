import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShowOrders from '../ShowOrders';



class Kitchen extends Component {
    constructor() {
        super();
        this.state = {
            orders: []
        }
    }


    componentDidMount() {
        const url = "http://localhost:8080/order";

        fetch(url)
            .then(res => res.json())
            .then((orderAsJson) => { this.setState({ orders: orderAsJson }, console.log('aquí las ordenes', orderAsJson)) })
    }

    render() {
       // console.log(this.state.orders);
        return (
            <div className="kitchen-orders">
                <h1>aquí Kitchen / show orders</h1>

                {this.state.orders.orders ? this.state.orders.orders.map((order, index)=>(
                    <ShowOrders 
                    
                    name={order.clientname}
                    items={order.items}
                    status={order.status}
                    />
                ))
                : console.log('waiting for orders response')}

            </div>
        );
    }

}

export default Kitchen;