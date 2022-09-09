import { useState } from "react"
const ItemCount=({initial,stock})=>{
const [itemCount,setItemCount]=useState(1) 
const sumar=()=>{
    setItemCount(itemCount +1)
} 
const restar=()=>{
   setItemCount(itemCount -1)
} 
const agregarAlCarrito=()=>{
    setItemCount(itemCount)
    console.log("Producto agregado")
} 

    return (
      <>
      <button onClick= {()=>sumar()} > + </button>
      <span> {itemCount} </span>
      <button onClick= {()=>restar()} >  - </button>
      <br/>
      <button onClick= {()=>agregarAlCarrito()} >  Agregar al carrito </button>
      
      </>
    );
}
  
export default ItemCount;