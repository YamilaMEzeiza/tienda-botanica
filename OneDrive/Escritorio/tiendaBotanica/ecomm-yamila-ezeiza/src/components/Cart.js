import { useContext } from "react"
import { CartContext } from "./CartContext";
const Cart=()=>{
  const ctx=  useContext(CartContext);
    return(
        <>
        <div className="carts">
        <div className="cart">
            <h2> Carrito</h2>
            <table className="table table-hover m-0 cartCenter">
        <button onClick={ctx.clear}>Eliminar todos los productos</button>
        {
            ctx.cartList.map(product=> 
                 <div className="cartItem">
            <tr className="detail" >
                <td>
                <img src={product.img} className="detail-img-top" alt={product.title}/>
                </td>
                <div className="detail-body">
            <td className="detail-title">{product.title}</td>
            <td className="detail-text">Precio: ${product.price}</td>
            <td><span id="quantity">Cantidad:{product.quantity}</span></td> 
            <button onClick={()=>ctx.removeItem(product.id)}>Eliminar producto</button></div></tr> </div>)
            }
         </table>
        </div>
        </div>
        </>
    )
}
export default Cart