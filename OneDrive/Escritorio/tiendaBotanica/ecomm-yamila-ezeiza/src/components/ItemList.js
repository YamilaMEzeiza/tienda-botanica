import React from 'react'
import Item from './Item.js';

function ItemList({ items }) {
    return (
        <div id="itemList">
            {items.map(product => (< Item key={product.id}
                id={product.id}
                title={product.title}
                img={product.img}
                description={product.description}
                price={product.price} />
            ))}
        </div>
    );
}
export default ItemList