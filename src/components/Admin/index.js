import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddProductToMenu from '../AddProductToMenu';
import ShowProducts from '../ShowProducts';
import NavBar from '../NavBar';

const INITIAL_STATE = {
    item: '',
    price: '',
    category: '',
    img: '',
    menu: [],
    error: null,
};

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            menu: [],
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
            .then(response => console.log('aquí la respuesta', JSON.stringify(response)))
            .catch(error => console.log('Error ', error));
    }

    onSubmit = event => {
        const { item, category, img } = this.state;
        const toNumber = Number(this.state.price);
        const url = 'http://localhost:8080/product';

        const addProductToDB = {
            "category": category,
            "img": img,
            "price": toNumber,
            "product": item,
        };

        this.fetchApi(url, addProductToDB, 'POST');
        console.log(addProductToDB);

        event.preventDefault();
    }
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }



    componentDidMount() {

        fetch("http://localhost:8080/product")
            .then(res => res.json())
            .then((orderAsJson) => { this.setState({ menu: orderAsJson }, console.log(orderAsJson)) });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <NavBar />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {this.state.menu ? <ShowProducts
                            menu={this.state.menu}
                        /> : <ShowProducts />}
                    </Col>
                    <Col>
                        <div className="addproduct-form">
                            <h3>Add Products</h3>
                            <AddProductToMenu
                                onChange={this.onChange}
                                onSubmit={this.onSubmit}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>

        );
    }
}



export default Admin;