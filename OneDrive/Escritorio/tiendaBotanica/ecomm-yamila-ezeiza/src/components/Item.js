import React from "react";
import {Link} from "react-router-dom";
function Item({id,title,img,price, description}){
    return(
        < div className="card" id={id}>
<div>
    <img src={img} className="card-img-top" alt={title}/>
    </div>
    <div className="card-body">
<h3 className="card-title">{title}</h3>
<p className="card-text">Descripción:{description}</p>
<p className="card-text">Precio: ${price}</p>
<Link to={`/item/${id}`}><button type="button" className="btn btn-primary"> Detalle del producto</button> </Link>
</div>
        </div>
    )
}
export default Item