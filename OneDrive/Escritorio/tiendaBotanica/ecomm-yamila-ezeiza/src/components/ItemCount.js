import { useState } from "react"
const ItemCount=({initial,stock,onAdd})=>{
const [itemCount,setItemCount]=useState(initial) 
const sumar=()=>{
    setItemCount(itemCount +1)
} 
const restar=()=>{
   setItemCount(itemCount -1)
} 


    return (
      <>
      <button onClick= {()=>sumar()} > + </button>
      <span> {itemCount} </span>
      <button onClick= {()=>restar()} >  - </button>
      <br/>
      <button onClick= {()=>onAdd(itemCount)}>  Agregar al carrito </button>
      
      </>
    );
}
  
export default ItemCount;