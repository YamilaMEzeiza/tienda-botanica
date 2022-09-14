import React from "react"

function Item({id,title,img,price, description}){
    return(
        < div className="card" id={id} style={{width: '1,5 rem'}}>
<div>
    <img src={img} className="card-img-top" alt={title}/>
    </div>
    <div className="card-body">
<h3 className="card-title">{title}</h3>
<p className="card-text">Descripción:{description}</p>
<p className="card-text">Precio: ${price}</p>
<button type="button" className="btn btn-primary"> Agregar al carrito</button>
</div>
        </div>
    )
}
export default Item