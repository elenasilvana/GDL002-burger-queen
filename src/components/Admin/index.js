import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddProductToMenu from '../AddProductToMenu';
import Table from 'react-bootstrap/Table';

import ShowProducts from '../ShowProducts';

const INITIAL_STATE = {
	item: '',
	price: '',
	category: '',
    img: '',
    menu: [],
	error: null,
	};

class Admin extends Component{
    constructor() {
		super();
		this.state = {
            //...INITIAL_STATE,
			menu: [],
		}
    }

     
    fetchApi = (url, data, meth) => {
		fetch(url, {
           // method: 'POST',
            method: meth,
			body: JSON.stringify(data),
			headers:{
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
		.then(response => console.log('aquí la respuesta', JSON.stringify(response)))
		.catch(error => console.log('Error ', error)); 
	}

    onSubmit = event => {
        const { item, category, img } = this.state;
        //console.log(item, price, category, img);
        const toNumber = Number(this.state.price);
        const url = 'http://localhost:8080/product';
        //console.log(toNumber);

        //expected properties order from DB: category, img, price, product
        const addProductToDB = {
            "category": category,
            "img": img,
            "price": toNumber,
            "product": item,
        };

        this.fetchApi(url, addProductToDB, 'POST');
        console.log(addProductToDB);
       // this.setState({ ...INITIAL_STATE
           // item: '',
           // price: '',
           // category: '',
           // img: ''
        //});
        event.preventDefault();
    }
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
   

    	
	componentDidMount(){
		
        //this works
        fetch("http://localhost:8080/product")
            .then(res => res.json())
						.then((orderAsJson)=>{this.setState({menu : orderAsJson}, console.log(orderAsJson))});		
	}

    render(){
        //console.log(this.state.menu);
        return (
            <Container>
                <Row>
                    <Col>
                        {this.state.menu ?  <ShowProducts 
                           menu={this.state.menu}
                           /> : <ShowProducts /> }

                           <h3>Add Products</h3> 
                           <AddProductToMenu 
                                onChange={this.onChange}
                                onSubmit={this.onSubmit}
                           />    
                 </Col>
                </Row>
            </Container>

        );
    }
}

/*
const INITIAL_STATE = {
	item: '',
	price: '',
	category: '',
	img: '',
	error: null,
	};
class AddProductToMenu extends Component {
    constructor(){
        super();
        this.state = { ...INITIAL_STATE }
    }
    onSubmit = event => {
        const { item, category, img } = this.state;
        //console.log(item, price, category, img);
        const toNumber = Number(this.state.price);
        //console.log(toNumber);

        const addProductToDB = {
            "item": item,
            "price": toNumber,
            "category": category,
            "img": img
        };

        console.log(addProductToDB);
        event.preventDefault();
        this.setState({...INITIAL_STATE});
    }
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render(){
        const {
            item, 
            price, 
            category,
            img
        } = this.state;

        const isInvalid = 
        item === '' || 
        price <= 0 ||
        category === '' ||
        img === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="item"
                    value={item}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Nombre del producto"
                />
                <input
                    name="price"
                    value={price}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Ingresa el precio"
                />
                <input 
                    name="category"
                    value={category}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Ingresa categoría"
                />
                <input 
                    name="img"
                    value={img}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Ingresa url de imagen"
                />
                <button disabled={isInvalid} type="submit">
                    Agregar
                </button>
            </form>

        );
    }

}*/

export default Admin;