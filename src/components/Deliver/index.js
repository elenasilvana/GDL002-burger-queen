import React, { Component } from 'react';
import NavBar from '../NavBar';
import ShowOrders from '../ShowOrders';
//bootstrap style imports
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


class Deliver extends Component {
    constructor() {
        super();
        this.state = {
            orders: [],
            toDeliver: [],
            delivered: []
        }
    }

    fetchApi = (url, data, meth) => {
        fetch(url, {

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
        const url = "https://backbq.herokuapp.com/order";

        fetch(url)
            .then(res => res.json())
            .then((orderAsJson) => { this.setState({ orders: orderAsJson }, console.log('mongoDB orders', orderAsJson)) })
    }


    render(){ /*
        quiza deberia llenar estas variables desde el componente padre
        const {
        toDeliver, 
        delivered
    } = this.state*/
    let toDeliver;
    let delivered;
       
        if(this.state.orders.orders){
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
                                        )) : console.log('waiting for orders response')/*implementar animacion de espera*/}
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