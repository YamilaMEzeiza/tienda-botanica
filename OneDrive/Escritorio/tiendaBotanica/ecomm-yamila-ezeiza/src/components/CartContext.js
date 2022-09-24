import { createContext, useState } from "react";

export const CartContext=createContext();

const CartContextProvider=({children})=>{
    const [cartList,setCartList]= useState([])
   
   
    const isInCart=(id)=>{
        return cartList.find(product=> (product.id ===id))? true:false;
   }
   
        
    const addItem=(prod,quantity)=>{
    if(isInCart(prod.id)){
             setCartList(cartList.map(product=>{ 
                return product.id ===prod.id ? {...product,quantity: product.quantity+quantity}:product
                }));
             }else{
               
                setCartList([...cartList,{...prod,quantity}])
             }
       
                }
            
    const clear=()=>{
        setCartList([]) 
    }
    const removeItem=(id)=>{
       setCartList(cartList.filter(product=>product.id!==id)) 
    }
    return(
        <CartContext.Provider value={{cartList,addItem,isInCart,removeItem,clear}}>
       {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider