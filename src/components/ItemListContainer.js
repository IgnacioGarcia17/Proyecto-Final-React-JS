import React from 'react';
import { Link } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Producto 1',
        description: 'Descripción del producto 1',
        price: 199.999,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        name: 'Producto 2',
        description: 'Descripción del producto 2',
        price: 69.999,
        image: 'https://via.placeholder.com/150',
    },
];

const ItemListContainer = () => {
    return (
        <div className="item-list-container">
            <h2>Catálogo de Productos</h2>
            <div className="product-list">
                {products.map(product => (
                    <div className="product-item" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Precio: ${product.price}</p>
                        <Link to={`/item/${product.id}`}>Ver detalles</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;
