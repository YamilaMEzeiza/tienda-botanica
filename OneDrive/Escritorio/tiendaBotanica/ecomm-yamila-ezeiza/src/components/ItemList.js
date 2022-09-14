import React from 'react'
import Item from './Item.js';

function ItemList ({data}){
    return (
       <div id="itemList">
       {data.map(product=>(< Item key= {product.id}
        title={product.title}
        img={product.img}
          description={product.description}
          price={product.price}/>
))}
</div>
    );
}
export default ItemList