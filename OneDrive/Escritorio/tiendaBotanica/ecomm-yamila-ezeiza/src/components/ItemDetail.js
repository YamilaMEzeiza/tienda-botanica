import React from "react";
import ItemCount from "./ItemCount.js";
import {useState} from "react";
import {Link} from "react-router-dom";

function ItemDetail({product}){
    const [countItem,setItemCount]= useState(0);
    const onAdd=(count)=>{
        alert('Has seleccionado'+ count+ " productos.")
        setItemCount(count)
    }
    return(
        
        < div className="detail" id={product.id} style={{width: '1,5 rem'}}>
<div>
    <img src={product.img} className="detail-img-top" alt={product.title}/>
    </div>
    <div className="detail-body">
<h3 className="detail-title">{product.title}</h3>
<p className="detail-text">Descripción:{product.description}</p>
<p className="detail-text">Precio: ${product.price}</p>
< div className="count">
{ countItem===0
   ? <ItemCount initial={countItem} stock={product.stock} onAdd={onAdd}></ItemCount>
   : <Link to='/cart' style={{textDecoration:"none"}}><button type="button"> Carrito</button> </Link>
}
   </div>
   </div>
        
   </div>
   )
}
export default ItemDetail