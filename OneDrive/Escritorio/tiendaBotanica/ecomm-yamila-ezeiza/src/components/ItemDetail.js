import React from "react";
import ItemCount from "./ItemCount.js"

function ItemDetail({product}){
    return(
        
        < div className="detail" id={product.id} style={{width: '1,5 rem'}}>
<div>
    <img src={product.img} className="detail-img-top" alt={product.title}/>
    </div>
    <div className="detail-body">
<h3 className="detail-title">{product.title}</h3>
<p className="detail-text">Descripción:{product.description}</p>
<p className="detail-text">Precio: ${product.price}</p>
<ItemCount initial={1} stock={10}/>
</div>
        
   </div>
   )
}
export default ItemDetail