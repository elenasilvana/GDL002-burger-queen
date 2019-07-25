import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';

class ShowProducts extends Component {
    render(){
     
        if(this.props.menu.products){
           var menuData = [...this.props.menu.products];
        }
     
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