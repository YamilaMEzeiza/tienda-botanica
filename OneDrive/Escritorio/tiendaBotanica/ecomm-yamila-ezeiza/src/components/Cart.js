import { serverTimestamp, doc, setDoc,collection, updateDoc,increment } from "firebase/firestore";
import  db from "../utils/firebaseConfig";
import { useContext } from "react"
import { CartContext } from "./CartContext";
const Cart=()=>{
  const ctx=  useContext(CartContext);
  const itemsDb=ctx.cartList.map(item=>({
    id:item.id,
    title:item.title,
    price:item.price,
    quantity:item.quantity,
  }))
  const createOrder= async() =>{
    let order={
        buyer:{
            name:"Lizzy Tagliani",
            email:"lizzy@gmail.com",
            phone:"12345678"
        },
        items:itemsDb,
        date: serverTimestamp(),
        total:ctx.priceTotal(),
    }
    const newOrder=doc(collection(db,"orders"))
    await setDoc(newOrder, order);
    ctx.cartList.forEach(async(item) => {
        const itemRef = doc(db, "products", item.id);
await updateDoc(itemRef, {
 stock:increment(-item.quantity) 
});
    });
    ctx.clear()
    alert('Your order has been created! This is your ID\'s order:' +newOrder.id)
  }
    
   if (ctx.cartList.length===0){
    return (<>
     <div className="carts">
   <div className="cart">
    <h2> Carrito</h2>
    <h3>No hay ningún producto en el carrito.</h3>
    </div>
    </div>
            
    </>)
   }
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
            <td className="detail-title">{product.title}</td>
            <td className="detail-text">Precio: $ {product.price}</td>
            <td><span id="quantity">Cantidad:{product.quantity}</span></td> 
            <td><span id="quantity">Subtotal:${product.quantity*product.price}</span></td> 
            <button onClick={()=>ctx.removeItem(product.id)}>Eliminar producto</button></tr> </div>)
            }
         </table>
        
         
         <div class="row ">
      <div class="col-12">
          <div class= "d-flex align-items-center h-100 border-bottom pb-2 pt-3">
              <h4 className="text-truncate ml-3 mb-0">Cantidad de productos agregados:  {ctx.productsTotal()}</h4>
          </div>
      </div>
      <div class="col-12">
          <div class= "d-flex align-items-center h-100 border-bottom pb-2 pt-3">
              <h4 className="text-truncate ml-3 mb-0 text-right">Subtotal: $ {ctx.priceTotal()}</h4>
          </div>
        
      </div>
      <div class="col-12">
          <div className=" d-flex align-items-center h-100 border-bottom pb-2 pt-3">
          <h3 className="text-truncate ml-3 mb-0">Total : $ {ctx.priceTotal()}</h3>
          </div>
          <div>
           <button onClick={createOrder}>Finalizar compra</button>
           </div>
      </div>
    
      </div>
      </div>
         </div>
        </>
    )
}
export default Cart