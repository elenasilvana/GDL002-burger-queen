import React, { Component } from 'react';
import NavBar from '../NavBar';
import ShowOrders from '../ShowOrders';
//bootstrap style imports
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';



class Kitchen extends Component {
    constructor() {
        super();
        this.state = {
            orders: [],
            kitchenOrders: [],
            readyOrders: []

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

    onChangeStatus = (orderId, status) => {
        const url = `http://localhost:8080/order/${orderId}`

        let newStatus;
        if (status === 'pending') {
            newStatus = "preparing";
        }
        else if (status === 'preparing') {
            newStatus = "ready";
        }

        const changeStatus = {
            "status": newStatus
        }

        this.fetchApi(url, changeStatus, 'PUT')
    }



    componentDidMount() {
        const url = "http://localhost:8080/order";

        fetch(url)
            .then(res => res.json())
            .then((orderAsJson) => { this.setState({ orders: orderAsJson }, console.log('aquí las ordenes', orderAsJson)) })
    }

    render() {
        let onKitchen;
        let orderReady;
        if (this.state.orders.orders) {
            onKitchen = this.state.orders.orders.filter((order) => { return ((order.status === 'pending') || (order.status === 'preparing')) });
            orderReady = this.state.orders.orders.filter((order) => { return (order.status === 'ready') });
        };
        //console.log(this.state.orders.orders);

        return (
            <container>
                <div className="row">
                    <div className="col">
                        <NavBar />
                    </div>

                </div>
                <div className="kitchen-orders">
                    <h1>aquí Kitchen / show orders</h1>

                    <div>
                        <Tabs defaultActiveKey="Orders" id="uncontrolled-tab-example">
                            <Tab eventKey="Orders" title="Ordenes">
                                <div className="row">
                                    <div className="card-container">
                                        {this.state.orders.orders ? onKitchen.map((order, index) => (
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
                            <Tab eventKey="CompletedOrders" title="Completadas">
                                <div className="row">
                                    <div className="card-container">
                                        {this.state.orders.orders ? orderReady.map((order, index) => (
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
                            <Tab eventKey="allOrders" title="Todas las Ordenes">
                                <div className="row">
                                    <div className="card-container">
                                        {
                                            this.state.orders.orders ? this.state.orders.orders.map((order, index) => (
                                                <ShowOrders
                                                    id={order._id}
                                                    name={order.clientname}
                                                    items={order.items}
                                                    status={order.status}
                                                    onChangeStatus={this.onChangeStatus}
                                                />
                                            ))
                                                : console.log('waiting for orders response')}

                                    </div>

                                </div>

                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </container>
        );
    }

}

export default Kitchen;