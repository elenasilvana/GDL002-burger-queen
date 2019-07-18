import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';

class ShowProducts extends Component {
    render(){
        //console.log('aqui ls props', this.props.menu.products);
        //this.props.menu.products.forEach((product)=> {console.log(product)})
        //const data = [];
        if(this.props.menu.products){
           var menuData = [...this.props.menu.products];
            //console.log(data);
           // data.forEach((product)=>{ console.log(product) });
        }
        //console.log(menuData);
        //this.props.menu.products ? console.log(data) : console.log('nada');
        return(
            <Table responsive striped bordered hover>
            <thead>
                <tr>
                <th>#id</th>
                <th>item</th>
                <th>Price</th>
                <th>Category</th>
                </tr>
            </thead>
            <tbody>
                { menuData ? 

                    menuData.map((product, index) => (
                        <tr>
                        <td>{index}</td>
                        <td>{product.product}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        </tr>
                    )) : console.log('waiting for response')
                    
                }
            </tbody>
            </Table>

        );
    }

}

export default ShowProducts;