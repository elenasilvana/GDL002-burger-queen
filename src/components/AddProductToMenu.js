import React, {Component} from 'react';

const INITIAL_STATE = {
	item: '',
	price: '',
	category: '',
	img: '',
	error: null,
	};


class AddProductToMenu extends Component {
 
    render(){
        const {
            item, 
            price, 
            category,
            img
        } = this.props;

        const isInvalid = 
        item === '' || 
        price <= 0 ||
        category === '' ||
        img === '';

        return (
            <form onSubmit={this.props.onSubmit}>
                <input
                    name="item"
                    value={item}
                    onChange={this.props.onChange}
                    type="text"
                    placeholder="Nombre del producto"
                />
                <input
                    name="price"
                    value={price}
                    onChange={this.props.onChange}
                    type="text"
                    placeholder="Ingresa el precio"
                />
                <input 
                    name="category"
                    value={category}
                    onChange={this.props.onChange}
                    type="text"
                    placeholder="Ingresa categoría"
                />
                <input 
                    name="img"
                    value={img}
                    onChange={this.props.onChange}
                    type="text"
                    placeholder="Ingresa url de imagen"
                />
                <button disabled={isInvalid} type="submit">
                    Agregar
                </button>
            </form>

        );
    }

}

export default AddProductToMenu;