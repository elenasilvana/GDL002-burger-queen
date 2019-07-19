import React, { Component } from 'react';
import NavBar from '../NavBar';
import ShowOrders from '../ShowOrders';
//bootstrap style imports
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Deliver extends Component {
    constructor() {
        super();
        this.state = {
            orders: [],
        }
    }

    fetchApi = (url, data, meth) => {
        fetch(url, {
            // method: 'POST',
            method: meth,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('mongoDB responde', JSON.stringify(response)))
            .catch(error => console.log('Error ', error));
    }

    componentDidMount() {
        const url = "http://localhost:8080/order";

        fetch(url)
            .then(res => res.json())
            .then((orderAsJson) => { this.setState({ orders: orderAsJson }, console.log('mongoDB orders', orderAsJson)) })
    }


    render(){
        //console.log(this.state.orders.orders);
        let toDeliver;
        let delivered;
        // onKitchen = this.state.orders.orders.filter((order) => { return ((order.status === 'pending') || (order.status === 'preparing')) });
        if(this.state.orders.orders){
            //this.state.orders.orders.forEach((order)=>{console.log(order)});
            toDeliver = this.state.orders.orders.filter((order)=>{return (order.status === 'ready')});
            console.log(toDeliver);
            delivered = this.state.orders.orders.filter((order)=>{return (order.status === 'delivered')});
        }
        return(
        <container>
            <div className="row">
                <div className="row">
                    <NavBar />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Entregas</h2>
                    <Tabs defaultActiveKey="Orders" id="uncontrolled-tab-example">
                            <Tab eventKey="Orders" title="Para entregar">
                                <div className="row">
                                    <div className="card-container">
                                        {this.state.orders.orders ? toDeliver.map((order, index) => (
                                            <ShowOrders
                                                id={order._id}
                                                name={order.clientname}
                                                items={order.items}
                                                status={order.status}
                                                onChangeStatus={this.onChangeStatus}
                                            />
                                        )) : console.log('waiting for orders response')}

                                    </div>

                                </div>

                            </Tab>
                            <Tab eventKey="DeliveredOrders" title="Entregadas">
                                <div className="row">
                                    <div className="card-container">
                                        {this.state.orders.orders ? delivered.map((order, index) => (
                                            <ShowOrders
                                                id={order._id}
                                                name={order.clientname}
                                                items={order.items}
                                                status={order.status}
                                        onChangeStatus={this.onChangeStatus}
                                            />
                                        )) : console.log('waiting for orders response')}

                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                </div>
            </div>

        </container>
        )
    }
}

export default Deliver;